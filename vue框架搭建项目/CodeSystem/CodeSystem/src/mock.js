const dynamicUser = [
    {
        name: "管理员",
        avatar: "https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/ccb565eca95535ab2caac9f6129b8b7a~300x300.image",
        desc: "管理员 - admin",
        username: "liwen",
        password: "123",
        status: 1,
        email:"2117450858@qq.com",
        phone: 19923799193,
        address:"湖南省雨湖区",
        school:"湖南科技大学",
        token: "rtVrM4PhiFK8PNopqWuSjsc1n02oKc3f",
        routes: [
            { id: 1, name: "/admin", path: "/admin", component: "Layout", redirect: "/admin/index", hidden: false, children: [
                { name: "/admin/index", path: "/admin/index", meta: { title: "admin" }, component: "admin/index" },
            ]},
            { id: 2, name: "/edit", path: "/edit", component: "Layout", redirect: "/edit/index", hidden: false, children: [
                { name: "/edit/index", path: "/edit/index", meta: { title: "edit" }, component: "edit/index" }
            ]},
            { id:3, name: "/examine", path: "/examine", component: "Layout", redirect: "/examine/index", hidden: false, children: [
                { name: "/examine/index", path: "/examine/index", meta: { title: "examine" }, component: "examine/index" }
            ] },
        ]
    },
    {
        name: "普通用户",
        avatar: "https://seatmeat.oss-cn-shanghai.aliyuncs.com/BiaoZhu/boy.png",
        desc: "普通用户 - people",
        username: "people",
        password: "123",
        status: 0,
        email:"2117450858@qq.com",
        phone: 19923799193,
        address:"湖南省雨湖区",
        school:"湖南科技大学",
        token: "4es8eyDwznXrCX3b3439EmTFnIkrBYWh",
        routes: [
            { id: 1, name: "/people", path: "/people", component: "Layout", redirect: "/people/index", hidden: false, children: [
                { name: "/people/index", path: "/people/index", meta: { title: "people" }, component: "people/index" },
            ]},
            { id: 2, name: "/search", path: "/search", component: "Layout", redirect: "/search/index", hidden: false, children: [
                { name: "/search/index", path: "/search/index", meta: { title: "search" }, component: "search/index" }
            ]},
        ]
    }
]

export default dynamicUser