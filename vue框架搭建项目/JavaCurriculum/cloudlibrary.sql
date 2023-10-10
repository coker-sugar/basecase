/*
SQLyog Ultimate v10.00 Beta1
MySQL - 8.0.31 : Database - cloudlibrary
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cloudlibrary` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `cloudlibrary`;

/*Table structure for table `book` */

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `book_id` int NOT NULL AUTO_INCREMENT COMMENT '图书编号',
  `book_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书名称',
  `book_isbn` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书标准ISBN编号',
  `book_press` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书出版社',
  `book_author` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书作者',
  `book_pagination` int DEFAULT NULL COMMENT '图书页数',
  `book_price` double(10,0) DEFAULT NULL COMMENT '图书价格',
  `book_uploadtime` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书上架时间',
  `book_status` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT '0' COMMENT '图书状态（0：可借阅，1:已借阅，2：归还中，3：已下架）',
  `book_borrower` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书借阅人',
  `book_borrowtime` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书借阅时间',
  `book_returntime` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书预计归还时间',
  PRIMARY KEY (`book_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `book` */

insert  into `book`(`book_id`,`book_name`,`book_isbn`,`book_press`,`book_author`,`book_pagination`,`book_price`,`book_uploadtime`,`book_status`,`book_borrower`,`book_borrowtime`,`book_returntime`) values (1,'Java基础案例教程（第2版）','9787115547477','人民邮电出版社','传智播客',291,59,'2020-12-11','1','李四',NULL,NULL),(2,'挪威的森林','9787546205618','上海译文出版社','村上春树',380,34,'2020-12-12','2','王五',NULL,NULL),(4,'JavaWeb程序设计任务教程','9787115439369','人民邮电出版社','传智播客',419,56,'2020-12-14','0',NULL,NULL,NULL),(5,'Java基础入门（第2版）','9787302511410','清华大学出版社','传智播客',413,59,'2020-12-15','0',NULL,NULL,NULL),(6,'SpringCloud微服务架构开发','9787115529046','人民邮电出版社','传智播客',196,43,'2020-12-16','0',NULL,NULL,NULL),(7,'SpringBoot企业级开发教程','9787115512796','人民邮电出版社','传智播客',270,56,'2020-12-17','0',NULL,NULL,NULL),(8,'Spark大数据分析与实战','9787302534327','清华大学出版社','传智播客',228,49,'2020-12-18','0',NULL,NULL,NULL),(10,'边城','9787543067028','武汉出版社','沈从文',368,26,'2020-12-20','0',NULL,NULL,NULL),(12,'自在独行','9787535488473','长江文艺出版社','贾平凹',320,39,'2020-12-22','0',NULL,NULL,NULL),(13,'沉默的巡游','9787544280662','南海出版公司','东野圭吾',400,59,'2020-12-23','1','张三','2012-12-11','2012-12-23'),(15,'围城','9787020127894','人民文学出版社','钱钟书',382,25,NULL,'0',NULL,NULL,NULL);

/*Table structure for table `record` */

DROP TABLE IF EXISTS `record`;

CREATE TABLE `record` (
  `record_id` int NOT NULL AUTO_INCREMENT COMMENT '借阅记录id',
  `record_bookname` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '借阅的图书名称',
  `record_bookisbn` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '借阅的图书的ISBN编号',
  `record_borrower` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书借阅人',
  `record_borrowtime` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书借阅时间',
  `record_remandtime` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '图书归还时间',
  PRIMARY KEY (`record_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `record` */

insert  into `record`(`record_id`,`record_bookname`,`record_bookisbn`,`record_borrower`,`record_borrowtime`,`record_remandtime`) values (23,'Java基础案例教程（第2版）','9787115547477','张三','2020-12-21','2020-12-21'),(24,'沉默的巡游','9787544280662','张三','2020-12-11','2021-01-06');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '用户名称',
  `user_password` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '用户密码',
  `user_email` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '用户邮箱（用户账号）',
  `user_role` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '用户角色',
  `user_status` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '用户状态（0:正常,1:禁用）',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `user` */

insert  into `user`(`user_id`,`user_name`,`user_password`,`user_email`,`user_role`,`user_status`) values (1,'黑马程序员','123123','itheima@itcast.cn','ADMIN','0'),(2,'张三','','zhangsan@itcast.cn','USER','0');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
