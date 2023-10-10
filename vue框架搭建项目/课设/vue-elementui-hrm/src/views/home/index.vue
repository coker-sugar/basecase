<template>
  <div>
    <el-row class="home" :gutter="20">

      <el-col :span="8" style="margin-top: 20px">
        <!-- 个人信息 -->
        <el-card shadow="hover">
          <div class="user">
            <!-- 文件上传
            action 文件上传的接口地址
            headers 指定请求头信息，用于在上传请求中传递额外的请求头参数。
            show-file-list 不显示已上传文件的列表。
            multiple 只能选择单个文件进行上传。
            on-success 文件上传成功后回调handleUploadSuccess函数
            limit 限制最多上传3个文件。 -->
            <el-upload style="margin-bottom: -120px;margin-right: -10px"
                       :action="uploadApi" :headers="headers" :show-file-list="false" :multiple="false"
                       :on-success="handleUploadSuccess"
                       :limit="3">
              <i class="el-icon-edit"></i>
            </el-upload>
            <img :src="avatar"/>
            <div class="userinfo">
              <p style="margin-bottom: 30px;font-weight: bold;">{{ currentDateInfo }}</p>
              <p class="name">{{ staff.name }}</p>
            </div>
          </div>
          <div class="login-info">
            <p>生日：<span>{{ staff.birthday }}</span></p>
            <p>地址：<span>{{ staff.address }}</span></p>
            <p>部门：<span>{{ staff.deptName }}</span></p>
          </div>
        </el-card>
        <!-- 日历 -->
        <el-card style="margin-top: 20px;height:400px">
          <el-calendar v-model="attendanceData.date">
            <template
              slot="dateCell"
              slot-scope="{date, data}">
              <span>{{ date.getDate() }}</span>
              <!-- 使用v-if避免在没有数据的时候显示解析 -->
              <el-tag v-show="data.type==='current-month'" v-if="attendanceData.list[date.getDate() - 1]"
                      :type="attendanceData.list[date.getDate() - 1].tagType">
                {{ attendanceData.list[date.getDate() - 1].message }}
              </el-tag>
            </template>
          </el-calendar>
        </el-card>
      </el-col>

      <el-col :span="16" style="margin-top: 20px">
        <div class="num">
          <el-card v-for="(item,index) in countData" :key="index" :body-style="{ display: 'flex', padding: 0 }">
           <!-- 图标 -->
            <i class="icon" :class="'el-icon-' +item.icon" :style="{ background: item.color }"/>
            <div class="detail">
              <!-- 文字 -->
              <p class="txt" style=" margin-bottom: 5px">{{ item.name }}</p>
              <!-- 数量 -->
              <p class="num">{{ item.value }}</p>
            </div>
          </el-card>
        </div>

        <!-- <el-card style="height: 300px">
          <div style="height: 300px" ref="city"></div>
        </el-card> -->
        <!-- 入职情况 -->
        <div class="graph" style="margin-top:40px;">
          <el-card style="height: 400px">
            <div style="height: 400px" ref="staff"></div>
          </el-card>
          <!-- 员工分布情况 -->
          <el-card style="height:400px">
            <div style="height: 400px" ref="department"></div>
          </el-card>
        </div>

      </el-col>
    </el-row>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { getAttendanceData, getCountData, getDepartmentData, getStaffData } from '../../api/home'
import { getDownloadApi, getUploadApi } from '../../api/docs'
import { edit, getInfo } from '../../api/staff'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      dayOfWeek: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      attendanceData: {
        date: '',
        list: []
      },
      // 右上角的今日状态
      countData: [
        {
          name: '员工总数',
          value: 0,
          icon: 'user',
          color: '#409EFF'
        },
        {
          name: '状态正常',
          value: 0,
          icon: 'star-on',
          color: '#67C23A'
        },
        {
          name: '状态异常',
          value: 0,
          icon: 's-goods',
          color: '#F56C6C'
        },
        {
          name: '今日迟到',
          value: 0,
          icon: 'timer',
          color: '#409EFF'
        },
        {
          name: '今日早退',
          value: 0,
          icon: 'watch',
          color: '#67C23A'
        },
        {
          name: '今日旷工',
          value: 0,
          icon: 'lock',
          color: '#F56C6C'
        }
      ],
      // 员工入职情况信息
      staffOption: {
        title: {
          text: new Date().getFullYear() + '年员工入职情况',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}人',
          textStyle: {
            fontWeight: 'bold'
          }
        },
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value',
          name: '人数'
        },
        series: [
          {
            data: [],
            type: 'line'
          },
          {
            data: [],
            type: 'bar'
          }
        ]
      },
      // 部分城市社保缴费比例
      cityOption: {
        title: {
          text: '部分城市社保缴费比例'
        },
        legend: {},
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return '<a>' + params.name + '</a></a>' + '<br /><a>' + params.seriesName + ': ' + params.data[params.seriesIndex + 1] * 100 + '%</a>'
          },
          textStyle: {
            fontWeight: 'bold'
          }
        },
        dataset: {
          source: []
        },
        xAxis: { type: 'category' },
        yAxis: {
          type: 'value',
          name: '百分比',
          axisLabel: {
            formatter: function (val) {
              return val * 100 + '%'
            }
          }
        },
        series: [{ type: 'line' }, { type: 'line' }, { type: 'line' }, { type: 'line' }]
      },
      // 右下角员工分布情况
      departmentOption: {
        title: {
          text: '员工分布情况',
          left: 'center'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}人',
          textStyle: {
            fontWeight: 'bold'
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: ['10%', '60%'],
            center: ['50%', '55%'],
            roseType: 'area',
            label: { // 饼图图形上的文本标签
              normal: {
                show: true,
                position: 'inner', // 标签的位置
                textStyle: {
                  fontWeight: 'bold'
                },
                formatter: '{d}%'
              }
            },
            itemStyle: {
              borderRadius: 3
            },
            data: []
          }
        ]
      }
    }
  },
  computed: {
    // 将Vuex模块中的staff和token状态映射为计算属性，可以通过this.staff来访问
    ...mapState('staff', ['staff']),
    ...mapState('token', ['token']),
    headers () {
      return { token: this.token }
    },
    uploadApi () {
      return getUploadApi()
    },
    downloadApi () {
      return getDownloadApi()
    },
    currentDateInfo () {
      const date = new Date()
      const year = date.getFullYear()
      // 注意月是从0开始
      const month = date.getMonth() + 1
      const currentDate = date.getDate()
      const day = date.getDay()
      return year + '年' + month + '月' + currentDate + '日' + ' ' + this.dayOfWeek[day]
    },
    avatar () {
      return this.staff.avatar ? this.downloadApi + this.staff.avatar : require('../../assets/images/mine.jpg')
    }
  },
  watch: {
    // 监听attendanceData.date的变化
    'attendanceData.date':
      function () {
        // 获取指定月份员工的考勤数据
        this.getStaffAttendance()
      }
  },
  methods: {
    // 在页面刚加载时赋初始数据
    loading () {
      // 调用getInfo接口拿到一条数据
      getInfo(this.staff.id).then(response => {
        if (response.code === 200) {
          // 调用store的commit方法，使用staff.js中SET_STAFF方法
          this.$store.commit('staff/SET_STAFF', response.data)
        } else {
          this.$message.error('获取数据失败！')
        }
      })
      // 调用getStaffData接口，拿到新增员工的数据
      getStaffData().then(response => {
        if (response.code === 200) {
          const quarters = ['一季度', '二季度', '三季度', '四季度']
          // 图员工入职情况 x轴设置为如上季度
          this.staffOption.xAxis.data = quarters
          // 遍历series赋值
          this.staffOption.series.forEach(item => {
            item.data = response.data
          })
          // 创建一个echart实例
          const staffChart = echarts.init(this.$refs.staff)
          staffChart.setOption(this.staffOption)
        } else {
          this.$message.error('获取数据失败！')
        }
      })

      // 右上角今日状态：获取统计数据
      getCountData().then(response => {
        if (response.code === 200) {
          this.countData[0].value = response.data.totalNum
          this.countData[1].value = response.data.normalNum
          this.countData[2].value = response.data.totalNum - response.data.normalNum
          this.countData[3].value = response.data.lateNum
          this.countData[4].value = response.data.leaveEarlyNum
          this.countData[5].value = response.data.absenteeismNum
        } else {
          this.$message.error('获取数据失败！')
        }
      })

      // 初始赋值给当前月员工的考勤数据
      getAttendanceData({ id: this.staff.id }).then(response => {
        if (response.code === 200) {
          this.attendanceData.list = response.data
        } else {
          this.$message.error('获取数据失败！')
        }
      })

      // 调用getDepartmentData接口，获取右下角员工分布情况
      getDepartmentData().then(response => {
        if (response.code === 200) {
          // 请求成功，赋值给data
          this.departmentOption.series[0].data = response.data
          // 创建echarts实例，绑定department，将数据传给department
          const departmentChart = echarts.init(this.$refs.department)
          departmentChart.setOption(this.departmentOption)
        } else {
          this.$message.error('获取数据失败！')
        }
      })
    },

    // 获取指定月份员工的考勤数据
    getStaffAttendance () {
      const d = this.attendanceData.date
      let month = ''
      // 1-9月前面加一个0
      if (d.getMonth() < 9) {
        month = d.getFullYear() + '0' + (d.getMonth() + 1)
      } else {
        month = d.getFullYear() + '' + (d.getMonth() + 1)
      }
      getAttendanceData({ id: this.staff.id, month: month }).then(response => {
        if (response.code === 200) {
          this.attendanceData.list = response.data
        } else {
          this.$message.error('获取数据失败！')
        }
      })
    },
    // 上传头像
    handleUploadSuccess (res) {
      if (res.code === 200) {
        // 修改头像
        edit({ id: this.staff.id, avatar: res.data.name }).then(response => {
          if (response.code === 200) {
            this.$message.success('修改头像成功！')
            this.$store.commit('staff/SET_AVATAR', res.data.name)
          } else {
            this.$message.error('修改头像失败！')
          }
        })
      } else {
        this.$message.error('文件上传失败！')
      }
    }
  },
  created () {
    this.loading()
  }
}
</script>

<style>
.el-calendar-table .el-calendar-day {
  height: 54px;
}
</style>
