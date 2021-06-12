-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021-06-12 10:31:05
-- 伺服器版本： 8.0.23
-- PHP 版本： 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `LOVE_PET`
--
CREATE DATABASE IF NOT EXISTS `LOVE_PET` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `LOVE_PET`;

-- --------------------------------------------------------

--
-- 資料表結構 `DOCTOR_SUGGESTION`
--

CREATE TABLE `DOCTOR_SUGGESTION` (
  `DOCTOR_SUGGESTION_ID` int NOT NULL,
  `FK_HOSPITAL_ORDER_ID` int NOT NULL,
  `SUGGESTION` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `DOCTOR_SUGGESTION`
--

INSERT INTO `DOCTOR_SUGGESTION` (`DOCTOR_SUGGESTION_ID`, `FK_HOSPITAL_ORDER_ID`, `SUGGESTION`) VALUES
(1, 1, '10歲以上固定每半到一年驗血健康檢查，跟獸醫討論評咕是否需更換飼料，餐食可以鮮食搭配飼料或全鮮食，營養品補充：ex. 益生箘、魚油…，保護毛孩避免碰撞。'),
(2, 2, '由於狗對鹽份攝取量不像人那麼高，但許多狗零食並非是特別製作給心臟、腎臟、腸胃不好的狗食用，加上零食味道偏重，鈉含量恐偏高。飼主應慎選給老年寵物的零食，可改為自己調理、親自水煮雞胸肉，比較天然、且不會有人工添加物，寵物也可以吃得更健康。'),
(3, 3, '老年狗狗的腸胃蠕動較慢，越接近高齡，吸收與消化的能力也會日漸變差。飼主可運用一些方法嘗試改善：飼料或罐頭的挑選上，可以留意是否有好消化的蛋白質，或選擇軟嫩好入口的材質；自製鮮食或生食的飼主則建議可將食物切碎或製成泥狀；或是添加犬專用酵素、益生菌、膳食纖維等，可幫助消化吸收。此外，平時若狗狗並沒有誤食其他東西，卻突然出現嘔吐症狀時，飼主請視情況評估是否需要讓狗狗腸胃道休息（禁食4-6小時），若禁食後仍持續嘔吐請立即就醫。若出現腹瀉症狀時，建議可先以少量多餐的方式進食，並觀察狀況。');

-- --------------------------------------------------------

--
-- 資料表結構 `EMERGENCY`
--

CREATE TABLE `EMERGENCY` (
  `EMERGENCY_ID` int NOT NULL,
  `FK_PET_ID` int NOT NULL,
  `CREATE_DATE` date NOT NULL,
  `POSITION` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `DESCRIPTION` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `EMERGENCY`
--

INSERT INTO `EMERGENCY` (`EMERGENCY_ID`, `FK_PET_ID`, `CREATE_DATE`, `POSITION`, `DESCRIPTION`) VALUES
(1, 2, '2021-03-09', '背部右側前方', '在毛小孩傷口包紮後的恢復期，要注意休息，減少運動，多靜養，少運動。這樣有利於傷口的結痂恢復。運動幅度太大還會導致傷口的裂開，必要的時候可以給毛小孩帶上伊麗莎白圈，防止毛小孩自己抓舔傷口。'),
(2, 3, '2021-04-12', '左後腳大腿處', '外傷傷口已處理好。回家以生理食鹽水沖洗，並確認傷口中沒有異物，若之後有異物侵入，建議還是去趟獸醫院；通常皮膚外傷毛孩會習慣用舌頭去舔 建議用頭套隔離避免毛孩舔咬，讓傷口加速癒合'),
(3, 8, '2021-05-05', '右前腳關節以上', '遭動物咬傷造成局部組織撕裂，甚至傷害到肌腱。同時，因為動物口中常帶有細菌，所以傷口容易被感染。咬傷出現的傷口，請密切注意受傷的部位與傷口的變化，在第一時間尋求醫師幫忙。'),
(4, 4, '2021-05-05', '右後腿', '意外擦傷，處理好後已無大礙。建議傷口包紮後，恢復的時間要注意給寵物補充營養，熟蛋黃、雞胸肉、牛肉……都有利於毛小孩的傷口恢復，可以適當的喂一些。'),
(5, 1, '2021-05-05', '左前腳關節處', '和別的貓打架造成的咬傷。雖然傷口不大，但是傷口較深，容易感染化膿，打架，咬傷這些傷口處理時很容易將貓咪的爪子和牙齒上的細菌帶入傷口，所以已將傷口周圍的毛剪掉，讓傷口外漏，進行處理。之後如有問題請及時送去醫院處理。'),
(6, 1, '2021-05-19', '左側背部', '狗狗的傷口成因有兩個可能性，一是被燙傷，另外免疫系統也可能出現問題，體內細胞攻擊自己的皮膚，造成皮膚潰爛。若果要確實知道原因需要經過多重檢查，包括麻醉和抽組織檢驗，建議去一趟大醫院。');

-- --------------------------------------------------------

--
-- 資料表結構 `HEALTH_CHECK`
--

CREATE TABLE `HEALTH_CHECK` (
  `HEALTH_CHECK_ID` int NOT NULL,
  `LISTNAME` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PRICE` int NOT NULL,
  `TESTING_SUBJECT` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `HEALTH_CHECK`
--

INSERT INTO `HEALTH_CHECK` (`HEALTH_CHECK_ID`, `LISTNAME`, `PRICE`, `TESTING_SUBJECT`) VALUES
(1, '基礎理學檢查', 100, '共同'),
(2, '重大傳染病篩檢', 500, '共同'),
(3, '腎臟病早期篩檢', 500, '共同'),
(4, '血色素檢測', 500, '共同'),
(5, '血糖檢測', 500, '共同'),
(6, '血清蛋白質檢測', 500, '共同'),
(7, '腎指數檢測', 700, '共同'),
(8, '肝指數檢測', 700, '共同'),
(9, '進階肝膽指數檢測', 800, '共同'),
(10, '鈣磷檢測', 500, '共同'),
(11, '血脂功能檢測', 400, '共同'),
(12, '電解質檢測', 500, '共同'),
(13, '胰臟指數檢測', 800, '共同'),
(14, '影像學檢測', 1000, '共同'),
(15, '甲狀腺功能檢測', 800, '共同'),
(16, '消化試驗', 700, '共同'),
(17, '果糖胺檢測', 300, '共同'),
(18, '進階眼科檢查', 200, '共同'),
(19, '糞便檢查', 100, '共同'),
(20, '尿液檢查', 600, '共同'),
(21, '快速心電圖檢查', 1000, '共同'),
(22, '腹腔超音波', 2000, '共同'),
(23, '心臟超音波', 2800, '共同'),
(24, '胸腔X光', 500, '共同'),
(25, '犬血球12項檢測', 2000, '狗'),
(26, '犬CRP檢測', 500, '狗'),
(27, '犬四合一快篩', 1000, '狗'),
(28, '犬血型測定', 2500, '狗'),
(29, '犬進階血液檢驗', 3600, '狗'),
(30, '犬尿中微量蛋白', 800, '狗'),
(31, '貓愛滋', 700, '貓'),
(32, '貓白血病', 800, '貓');

-- --------------------------------------------------------

--
-- 資料表結構 `HEALTH_CHECK& SET`
--

CREATE TABLE `HEALTH_CHECK& SET` (
  `HEALTH_CHECK & SET_ID` int NOT NULL,
  `FK_HEALTH_CHECK_ID` int NOT NULL,
  `FK_SET_MENU_ID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `HEALTH_CHECK& SET`
--

INSERT INTO `HEALTH_CHECK& SET` (`HEALTH_CHECK & SET_ID`, `FK_HEALTH_CHECK_ID`, `FK_SET_MENU_ID`) VALUES
(1, 1, 3),
(2, 2, 3),
(3, 3, 3),
(4, 4, 3),
(5, 5, 3),
(6, 6, 3),
(7, 7, 3),
(8, 8, 3),
(9, 9, 3),
(10, 10, 3),
(11, 11, 3),
(12, 12, 3),
(13, 13, 3),
(14, 14, 3),
(15, 15, 3),
(16, 16, 3),
(17, 17, 3),
(18, 18, 3),
(19, 19, 3),
(20, 20, 3),
(21, 21, 3),
(22, 22, 3),
(23, 23, 3),
(24, 24, 3),
(25, 1, 2),
(26, 2, 2),
(27, 3, 2),
(28, 4, 2),
(29, 5, 2),
(30, 6, 2),
(31, 7, 2),
(32, 8, 2),
(33, 9, 2),
(34, 10, 2),
(35, 11, 2),
(36, 12, 2),
(37, 13, 2),
(38, 14, 2),
(39, 15, 2),
(40, 16, 2),
(41, 1, 1),
(42, 2, 1),
(43, 3, 1),
(44, 4, 1),
(45, 5, 1),
(46, 6, 1),
(47, 7, 1),
(48, 8, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `HEALTH_REPORT`
--

CREATE TABLE `HEALTH_REPORT` (
  `HEALTH_REPORT_ID` int NOT NULL,
  `SEQ` int NOT NULL,
  `FK_HOSPITAL_ORDER_ID` int NOT NULL,
  `FK_HEALTH_CHECK_ID` int NOT NULL,
  `HEALTH_CHECK_VALUE` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `HEALTH_REPORT`
--

INSERT INTO `HEALTH_REPORT` (`HEALTH_REPORT_ID`, `SEQ`, `FK_HOSPITAL_ORDER_ID`, `FK_HEALTH_CHECK_ID`, `HEALTH_CHECK_VALUE`) VALUES
(1000, 1, 1, 1, '視力:正常,聽力:正常,牙齒:一顆斷牙。'),
(1000, 2, 1, 2, '無。'),
(1000, 3, 1, 3, '無異狀。'),
(1000, 4, 1, 4, '86'),
(1000, 5, 1, 5, '67'),
(1000, 6, 1, 6, '46'),
(1000, 7, 1, 7, '87'),
(1000, 8, 1, 8, '79'),
(1000, 9, 1, 9, '58'),
(1000, 10, 1, 10, '75'),
(1000, 11, 1, 11, '54'),
(1000, 12, 1, 12, '59'),
(1000, 13, 1, 13, '65'),
(1000, 14, 1, 14, '無異狀。'),
(1000, 15, 1, 15, '正常。'),
(1000, 16, 1, 16, '正常。'),
(1000, 17, 1, 26, '57'),
(1001, 1, 2, 1, '視力:正常,聽力:正常,牙齒:正常。'),
(1001, 2, 2, 2, '無。'),
(1001, 3, 2, 3, '無異狀。'),
(1001, 4, 2, 4, '64'),
(1001, 5, 2, 5, '78'),
(1001, 6, 2, 6, '86'),
(1001, 7, 2, 7, '48'),
(1001, 8, 2, 8, '76'),
(1002, 1, 3, 1, '視力:正常,聽力:輕微受損,牙齒:正常。'),
(1002, 2, 3, 2, '無。'),
(1002, 3, 3, 3, '無異狀。'),
(1002, 4, 3, 4, '78'),
(1002, 5, 3, 5, '57'),
(1002, 6, 3, 6, '73'),
(1002, 7, 3, 7, '56'),
(1002, 8, 3, 8, '83'),
(1002, 9, 3, 32, '無。');

-- --------------------------------------------------------

--
-- 資料表結構 `HOSPITAL_ORDER`
--

CREATE TABLE `HOSPITAL_ORDER` (
  `HOSPITAL_ORDER_ID` int NOT NULL,
  `FK_MEMBER_ID` int NOT NULL,
  `FK_PET_ID` int NOT NULL,
  `CREATE_DATE` datetime(6) NOT NULL,
  `BOOKING_DATE` datetime(6) NOT NULL,
  `FK_SET_MENU_ID` int NOT NULL,
  `FK_HELTH_CHECK_ID` int DEFAULT NULL,
  `FK_HELTH_CHECK_ID2` int DEFAULT NULL,
  `TOTAL_PRICE` int NOT NULL,
  `ORDER_STATUS` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `HOSPITAL_ORDER`
--

INSERT INTO `HOSPITAL_ORDER` (`HOSPITAL_ORDER_ID`, `FK_MEMBER_ID`, `FK_PET_ID`, `CREATE_DATE`, `BOOKING_DATE`, `FK_SET_MENU_ID`, `FK_HELTH_CHECK_ID`, `FK_HELTH_CHECK_ID2`, `TOTAL_PRICE`, `ORDER_STATUS`) VALUES
(1, 1, 1, '2021-01-01 11:23:00.000000', '2021-05-05 00:00:00.000000', 2, 26, NULL, 10000, 1),
(2, 1, 3, '2021-03-21 18:23:48.000000', '2021-06-03 00:00:00.000000', 1, NULL, NULL, 4000, 1),
(3, 4, 9, '2021-04-06 23:00:00.000000', '2021-07-01 00:00:00.000000', 1, 32, 31, 5500, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `HOTEL_ORDER`
--

CREATE TABLE `HOTEL_ORDER` (
  `HOTEL_ORDER_ID` int NOT NULL,
  `FK_MEMBER_ID` int NOT NULL,
  `CREATE_DATE` datetime(6) NOT NULL,
  `BOOKING_CHECKIN_DATE` date NOT NULL,
  `BOOKING_CHECKOUT_DATE` date NOT NULL,
  `FK_ROOM_TYPE_ID` int NOT NULL,
  `NUM_OF_PEOPLE` int NOT NULL,
  `NUM_OF_PETS` int DEFAULT NULL,
  `ORDER_STATUS` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `HOTEL_ORDER`
--

INSERT INTO `HOTEL_ORDER` (`HOTEL_ORDER_ID`, `FK_MEMBER_ID`, `CREATE_DATE`, `BOOKING_CHECKIN_DATE`, `BOOKING_CHECKOUT_DATE`, `FK_ROOM_TYPE_ID`, `NUM_OF_PEOPLE`, `NUM_OF_PETS`, `ORDER_STATUS`) VALUES
(1, 1, '2021-05-20 08:18:08.000000', '2021-05-22', '2021-05-23', 3, 2, 1, 0),
(2, 2, '2021-05-24 10:00:00.000000', '2021-05-29', '2021-06-01', 5, 2, 2, 1),
(3, 3, '2021-06-01 00:09:29.119000', '2021-06-06', '2021-06-07', 1, 4, 1, 1),
(4, 4, '2021-06-05 11:39:09.000000', '2021-06-12', '2021-06-13', 2, 2, 1, 1),
(5, 5, '2021-06-10 15:31:16.000000', '2021-06-18', '2021-06-20', 4, 4, 4, 0),
(6, 6, '2021-06-16 00:00:59.000000', '2021-06-22', '2021-06-23', 5, 2, 0, 0),
(7, 1, '2021-06-12 02:01:54.000000', '2021-06-16', '2021-06-17', 1, 3, 1, 0),
(8, 1, '2021-06-12 02:03:17.000000', '2021-06-29', '2021-06-30', 1, 3, 1, 0),
(9, 1, '2021-06-12 02:05:26.000000', '2021-06-22', '2021-06-23', 4, 1, 0, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `MEAL_COSTURMRIZE_DETAILS`
--

CREATE TABLE `MEAL_COSTURMRIZE_DETAILS` (
  `MEAL_COSTURMRIZE_DETAILS_ID` int NOT NULL,
  `FK_MEAL_COSTURMRIZE_ID` int NOT NULL,
  `INGREDIENTS` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `MEAL_COSTURMRIZE_DETAILS`
--

INSERT INTO `MEAL_COSTURMRIZE_DETAILS` (`MEAL_COSTURMRIZE_DETAILS_ID`, `FK_MEAL_COSTURMRIZE_ID`, `INGREDIENTS`) VALUES
(1, 1, '小魚造型餅乾'),
(2, 1, '澳洲牛肉'),
(3, 1, '紅蘿蔔'),
(4, 1, '放山雞的蛋'),
(5, 1, '南瓜'),
(6, 1, '青菜'),
(7, 2, '骨頭造型餅乾'),
(8, 2, '冰島鱈魚'),
(9, 2, '紅蘿蔔'),
(10, 2, '放山雞的蛋'),
(11, 2, '南瓜'),
(12, 2, '青菜'),
(13, 3, '圈圈造型餅乾'),
(14, 3, '澎湖大明蝦'),
(15, 3, '紅蘿蔔'),
(16, 3, '放山雞的蛋'),
(17, 3, '南瓜'),
(18, 3, '青菜'),
(19, 4, '基本款造型餅乾'),
(20, 4, '冰島鱈魚'),
(21, 4, '紅蘿蔔'),
(22, 4, '放山雞的蛋'),
(23, 4, '青菜'),
(24, 4, '南瓜');

-- --------------------------------------------------------

--
-- 資料表結構 `MEAL_CUSTORMRIZE`
--

CREATE TABLE `MEAL_CUSTORMRIZE` (
  `MEAL_CUSTORMRIZE_ID` int NOT NULL,
  `FK_RESTAURANT_ORDER_ID` int NOT NULL,
  `MEAL_COSTURMRIZE_AMOUNT` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `MEAL_CUSTORMRIZE`
--

INSERT INTO `MEAL_CUSTORMRIZE` (`MEAL_CUSTORMRIZE_ID`, `FK_RESTAURANT_ORDER_ID`, `MEAL_COSTURMRIZE_AMOUNT`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `MEAL_DATA`
--

CREATE TABLE `MEAL_DATA` (
  `MEAL_DATA_ID` int NOT NULL,
  `MEAL_TYPE` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `MEAL_NAME` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `MEAL_PRICE` int NOT NULL,
  `MEAL_IMG` varchar(200) NOT NULL,
  `MEAL_STATUS` tinyint(1) NOT NULL,
  `MEAL_CATA` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `MEAL_CAL` int NOT NULL,
  `MEAL_MSG` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `MEAL_COUNT` int NOT NULL,
  `eng` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `MEAL_DATA`
--

INSERT INTO `MEAL_DATA` (`MEAL_DATA_ID`, `MEAL_TYPE`, `MEAL_NAME`, `MEAL_PRICE`, `MEAL_IMG`, `MEAL_STATUS`, `MEAL_CATA`, `MEAL_CAL`, `MEAL_MSG`, `MEAL_COUNT`, `eng`) VALUES
(1, '乾糧', '基本款造型餅乾', 100, './img/restaurant/mainFood.svg', 1, 'petsCustom', 30, 'null', 1, 'mainfood'),
(2, '乾糧', '小魚造型餅乾', 210, './img/restaurant/mainFood2.svg', 1, 'petsCustom', 36, 'null', 1, 'mainfood2'),
(3, '乾糧', '骨頭造型餅乾', 210, './img/restaurant/mainFood3.svg', 1, 'petsCustom', 40, 'null', 1, 'mainfood3'),
(4, '乾糧', '圈圈造型餅乾', 160, './img/restaurant/mainFood4.svg', 1, 'petsCustom', 42, 'null', 1, 'mainfood4'),
(5, '主食', '澳洲牛肉', 300, './img/restaurant/meat.svg', 1, 'petsCustom', 210, 'null', 1, 'meat_beef'),
(6, '主食', '冰島鱈魚', 280, './img/restaurant/fish.svg', 1, 'petsCustom', 185, 'null', 1, 'meat_fish'),
(7, '主食', '澎湖大明蝦', 290, './img/restaurant/meat_shrimp.svg', 1, 'petsCustom', 190, 'null', 1, 'meat_shrimp'),
(8, '主食', '雞腿+雞胸', 200, './img/restaurant/meat_chicken.svg', 1, 'petsCustom', 160, 'null', 1, 'meat_chicken'),
(9, '主食', '紐西蘭帶骨羊腿', 200, './img/restaurant/meat_lamp.svg', 1, 'petsCustom', 160, 'null', 1, 'meat_lamp'),
(10, '配菜', '紅蘿蔔', 20, './img/restaurant/carrot.png', 1, 'petsCustom', 36, 'null', 1, 'sidefood1'),
(11, '配菜', '放山雞的蛋', 20, './img/restaurant/sliceEgg.svg', 1, 'petsCustom', 33, 'null', 1, 'sidefood3'),
(12, '配菜', '南瓜', 20, './img/restaurant/pumpkin.png', 1, 'petsCustom', 62, 'null', 1, 'sidefood4'),
(13, '美式', '安格斯牛肉漢堡', 100, './img/restaurant/hamburger.png', 1, 'humanFood', 120, '選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。', 1, 'null'),
(14, '美式', '費城牛肉三明治', 120, './img/restaurant/KxytjSo.jpg', 1, 'humanFood', 300, '選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。', 1, 'null'),
(15, '美式', '炸物拼盤', 500, './img/restaurant/friedFood.jpg', 0, 'humanFood', 500, '選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。', 1, 'null'),
(16, '美式', '凱薩沙拉', 80, './img/restaurant/CaesarSalad.jpg', 1, 'humanFood', 90, '【人氣沙拉】雞胸肉與酥脆沙拉，佐上酥脆麵包丁、培根與起司粉，淋上特製凱薩醬，經典再現。', 1, 'null'),
(17, '美式', '碳烤豬肋排', 500, './img/restaurant/porkrib.jpg', 1, 'humanFood', 260, '選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。', 1, 'null'),
(18, '義式', '番茄義大利麵', 200, './img/restaurant/tomatoPasta.jpg', 1, 'humanFood', 220, '美味的番茄肉醬義大利麵，關鍵來自於肉的選擇。選用香味十足的牛肉，再加上義式香腸做食物的基底，搭配新鮮的小番茄及濃縮的醬料，最後撒上滿滿的起士粉，讓舌尖上的味蕾，更上一層樓。', 1, 'null'),
(19, '義式', '羅勒青醬義大利麵', 320, './img/restaurant/greenPasta.jpg', 1, 'humanFood', 200, '這是一個很好吃的羅勒青醬義大利麵', 1, 'null'),
(20, '義式', '蛤蠣奶油義大利麵', 200, './img/restaurant/clamPasta.jpg', 1, 'humanFood', 500, '蛤蠣很新鮮喔~ 很好吃的義大利麵', 1, 'null'),
(21, '義式', '雙層美式臘腸披薩', 300, './img/restaurant/Pizza.jpg', 1, 'humanFood', 400, '不想吃義大利麵，那就吃披薩吧。', 1, 'null'),
(22, '義式', '彩蔬鮮菇披薩', 390, './img/restaurant/hamburger.png', 0, 'humanFood', 290, '選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。', 1, 'null'),
(23, '沙拉', '雞肉沙拉', 200, './img/restaurant/chickenSalad.jpg', 1, 'petsFood', 230, '炎炎夏日，來道清爽的雞肉沙拉，讓狗狗攝取一天運動的養分，添加芹菜及番茄等涼性蔬菜，有助於清熱解暑，再加上適量的油脂，提高身體的吸收度，最後淋上特製的沙拉醬，保證毛孩們食慾大開。', 1, 'null'),
(24, '沙拉', '牛肉沙拉', 299, './img/restaurant/beefSalad.jpg', 1, 'petsFood', 220, '選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。', 1, 'null'),
(25, '沙拉', '嫩煎鮭魚沙拉', 270, './img/restaurant/fishSalad.jpg', 1, 'petsFood', 200, '選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。', 1, 'null'),
(26, '鮮食', '低敏結實配方', 370, './img/restaurant/petsFood.jpg', 1, 'petsFood', 250, '專業營養師調配，可作為狗狗長期主食，手切新鮮肉塊，搭配多元食材，針對機能營養進補，滿滿肉塊讓毛孩大口咬咬，即開即食，嗜口性高。', 1, 'null'),
(27, '鮮食', '關節保養配方', 350, './img/restaurant/petsFood.jpg', 1, 'petsFood', 260, '讓毛孩走路不卡卡的獨家配方，添加支持關節健康的四大成份，給毛孩健步如飛的行動力！', 1, 'null'),
(28, '鮮食', '毛髮亮麗配方', 400, './img/restaurant/petsFood.jpg', 1, 'petsFood', 255, '全面及均衡營養的乾糧，專利配方證實能保持健康皮膚和亮麗毛髮。', 1, 'null'),
(29, '鮮食', '元氣滿滿­­配方', 480, './img/restaurant/petsFood.jpg', 1, 'petsFood', 280, '豐富的牛肉肉塊，加上細碎的燉菜，還有蘋果以及枸杞，讓狗狗除了吃得開心，也達到養生的效果。讓狗狗建立好體質，遠離醫生。', 1, 'null'),
(30, '配菜', '青菜', 20, './img/restaurant/veg1.png', 1, 'petsCustom', 36, 'null', 1, 'sidefood2');

-- --------------------------------------------------------

--
-- 資料表結構 `MEMBER`
--

CREATE TABLE `MEMBER` (
  `MEMBER_ID` int NOT NULL,
  `ACCOUNT` varchar(50) NOT NULL DEFAULT 'EMAIL',
  `NICKNAME` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `PASSWORD` varchar(20) NOT NULL,
  `NAME` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ADDRES` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PHONE` varchar(20) NOT NULL,
  `AUTHORITY` tinyint(1) NOT NULL,
  `SUBSCRIPTION` tinyint(1) NOT NULL,
  `DELIEVERY_NOTICE` tinyint(1) NOT NULL,
  `MEMBER_IMG` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `MEMBER`
--

INSERT INTO `MEMBER` (`MEMBER_ID`, `ACCOUNT`, `NICKNAME`, `PASSWORD`, `NAME`, `ADDRES`, `PHONE`, `AUTHORITY`, `SUBSCRIPTION`, `DELIEVERY_NOTICE`, `MEMBER_IMG`) VALUES
(1, 'a111111@yahoo.com.tw', '小華', '1111', '王曉華', '台北市士林區承德路四段194巷10號6樓', '0923774956', 2, 0, 1, './img/back_index/h1.jpg'),
(2, 'a222222@yahoo.com.tw', '小明', '2222', '蔡小明', '台北市大安區和平東路二段294號', '0912442874', 2, 1, 2, './img/back_index/h2.jpg'),
(3, 'a333333@yahoo.com.tw', '小花', '3333', '李小花', '新北市土城區亞洲路247號', '0943777493', 2, 0, 1, './img/back_index/h3.jpg'),
(4, 'a444444@yahoo.com.tw', '小白', '4444', '林小白', '新北市新莊區中港路9巷29號2樓', '0937884932', 2, 1, 2, './img/back_index/h4.jpg'),
(5, 'a555555@yahoo.com.tw', '小黑', '5555', '吳小黑', '新北市永和區秀朗路一段155號', '0935284712', 2, 1, 0, './img/back_index/h5.jpg'),
(6, 'brandon.sanders@mail.com', 'Timothy', '6666', 'Timothy Jackson', '台南市安南區安和路二段145號', '0914088949', 2, 0, 1, './img/back_index/h6.jpg'),
(7, 'eugene.barnett@mail.com', 'Sara', '22222222', 'Sara Lee', '台北市內湖區金莊路97巷25號', '0988246064', 2, 0, 1, NULL),
(8, 'marie.wade@mail.com', 'Eliza', '33333333', 'Eliza Mendoza', '新北市樹林區備內街53巷12號7樓', '0935188842', 2, 0, 1, NULL),
(9, 'alex.mendoza@mail.com', 'Benjamin', '44444444', 'Benjamin Porter', '台北市士林區天母北路165號', '0933542741', 2, 0, 1, NULL),
(10, 'jessica.fox@mail.com', 'Ryan', '55555555', 'Ryan Holmes', '台中市西區博館路298號', '0933058031', 2, 0, 1, NULL),
(11, 'hasogawe@altmails.com', 'hugo', 'CEfH4VVns', '黃羽行', '新北市汐止區99巷7號', '0952702107', 2, 0, 0, NULL),
(12, 'luyulehu@altmails.com', 'wenwen', '2HHQUoHnZ', '李文秀', '高雄市三民區黃興路22巷2號3樓', '0939309932', 2, 1, 0, NULL),
(13, 'dehicawu@altmails.com', '阿傑', '3nh6oYoo8', '平智傑', '台中市大雅區神林南路37號', '0988697532', 2, 0, 0, NULL),
(14, 'xufupezo@altmails.com', 'peter', 'D5E83MW0K', '陳慶函', '台中市北區育樂街34號', '0987817790', 2, 1, 0, NULL),
(15, 'cuxihosa@altmails.com', 'ellen', '1HDF2kxuE', '陳德綸', '新竹市東區食品路275號', '0918812715', 2, 0, 0, NULL),
(16, 'sesaraxo123@gmail.com', '花花', 'VNrMDRY8', '張雅琪', '南投縣草屯鎮新生東路164巷8號', '0956654828', 2, 0, 1, NULL),
(17, 'fobefigu030@gmail.com', '泡泡', 'dBScMR63', '卓永芝', '桃園市龍潭區神龍路39巷16號', '0911676174', 2, 1, 0, NULL),
(18, 'nizabaje2468@gmail.com', '毛毛', '3885vXgu', '許思琳', '新竹縣竹北市勝利七街二段167巷12號', '0917276428', 2, 1, 0, NULL),
(19, 'bukubuvo107@gmail.com', '魔人啾啾', 'xZQD4UmA', '溫彥宣', '台中市大里區益民路一段190巷20號', '0986290712', 2, 0, 0, NULL),
(20, 'gigowaho52@gmail.com', '邦妮', '9zKz9Gk8', '符筱葳', '澎湖縣馬公市三多路80巷1號', '0937921706', 2, 1, 1, NULL),
(21, 'abcde@hotmail.com', '憲哥', 'tibame', '吳忠憲', '桃園市龜山區文化一路90號', '0988788988', 2, 1, 0, NULL),
(22, 'a1b2c3@hotmail.com', '非哥', 'tibame1', '張非', '新北市林口區文化一路10號', '0933133331', 2, 1, 1, NULL),
(23, 'ilovepets@hotmail.com', '呱哥', 'tibame2', '胡呱', '台中市大甲區台灣大道七段10號', '0909545656', 2, 0, 1, NULL),
(24, 'petsloveme@hotmail.com', '焦哥', 'tibame3', '黃子焦', '台北市大同區南京西路211號', '0920123543', 2, 1, 0, NULL),
(25, 'idonthavepets@hotmail.com', '氖哥', 'tibame4', '徐乃霖', '高雄市鳳山區誠義路155號', '0910111222', 2, 0, 0, NULL),
(26, ' wang_mingming@gmail.com   ', '王明明 ', 'lk43j6b3lj6v3', '王民須 ', '台北市松山區光復南路1號2樓 ', '0983243977', 2, 0, 1, NULL),
(27, ' abcaa_ling0423@gmail.com ', '小林 ', 'dkjglvsk1213   ', '林曉和 ', '台中市霧峰區柳豐三街25號', '0939161837', 2, 1, 1, NULL),
(28, 'lin_TTAuniversity@gmail.com ', '淋漓塔 ', '34hvov5yji ', '林緹塔', '高雄市前鎮區復興三路100-2號', '0929744556', 2, 0, 0, NULL),
(29, 'yi_jun_zhang@gmail.com ', '怡君張 ', 'yi_junyi_jun88', '張怡君', '台南市東區崇善路595-1號', '0925473048', 2, 1, 0, NULL),
(30, 'jiarong_chang@gmail.cpm', '家榮榮 ', 'jiarongabc066 ', '陳佳榮 ', '花蓮縣吉安鄉永興七街72號', '0977644312', 2, 1, 0, NULL),
(31, 'LovePets@gmail.com', '管理員', '7777', '管理員', '台北市中山區南京東路三段219號', '0987654321', 1, 1, 2, './img/back_index/LOGO@2x.png');

-- --------------------------------------------------------

--
-- 資料表結構 `MESSAGE_LIST`
--

CREATE TABLE `MESSAGE_LIST` (
  `MESSAGE_LIST_ID` int NOT NULL,
  `FK_SHOPPING_ORDER_ID` int NOT NULL,
  `MESSAGE_CONTENT` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `OFFICAL_FEEDBACK` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `CREATE_DATE` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `MESSAGE_LIST`
--

INSERT INTO `MESSAGE_LIST` (`MESSAGE_LIST_ID`, `FK_SHOPPING_ORDER_ID`, `MESSAGE_CONTENT`, `OFFICAL_FEEDBACK`, `CREATE_DATE`) VALUES
(1, 1, '請問大約何時寄出?', '訂單成立兩天內寄出哦，感謝您', '2021-05-21 00:00:00.000000'),
(2, 2, '我花1千2百50萬買太空艙請問能打折嗎', '商品已是最低折扣無法哦!', '2021-05-21 00:00:00.000000'),
(3, 3, '出貨迅速', '感謝您的支持，期待下次您的選購', '2021-05-21 00:00:00.000000');

-- --------------------------------------------------------

--
-- 資料表結構 `NEWS`
--

CREATE TABLE `NEWS` (
  `NEWS_ID` int NOT NULL,
  `NEWS_TITLE` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `NEWS_IMG` varchar(200) NOT NULL,
  `NEWS_CONTENT` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `NEWS_STATUS` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `NEWS`
--

INSERT INTO `NEWS` (`NEWS_ID`, `NEWS_TITLE`, `NEWS_IMG`, `NEWS_CONTENT`, `NEWS_STATUS`) VALUES
(1, '特製毛孩麵包上市', 'img/index/news1.jpg', '無鹽鬆軟麵包，不使用小麥粉，使用有機南瓜、北海道馬鈴薯、京都山羊乳與蜂蜜等天然食材製成。', 1),
(2, '即日起游泳池開放', 'img/index/news2.png', '炎炎夏日讓毛孩玩玩水，清涼又有趣。免費提供寵物救生衣以及浮板玩具。', 1),
(3, '與主人共享舒適房間', 'img/index/news3.png', '我們不惜成本打造合適主人與寵物的居住環境，期望毛孩們獲得最滿意的外宿經驗。', 1),
(4, '專業寵物健檢中心', 'img/index/news4.png', '寵物的健康不能等！樂寵擁有最專業的獸醫駐足在渡假村內，帶毛孩來檢查一番，還能自由地奔跑在園區內，增進抵抗力。', 1),
(5, '毛孩沙拉新上市', 'img/index/news5.png', '夏季限定「雞肉沙拉」新上市！炎炎夏日，你還在餵家裡的毛孩寵物飼料嗎？趕快預訂樂寵的鮮食，讓牠清涼一下。', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `PET_INFO`
--

CREATE TABLE `PET_INFO` (
  `PET_ID` int NOT NULL,
  `PET_NAME` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PET_GENDER` tinyint(1) NOT NULL,
  `PET_AGE` int NOT NULL,
  `PET_SPECIES` tinyint(1) NOT NULL,
  `PET_CHIP_NUMBER` varchar(15) NOT NULL,
  `PET_WEIGHT` float NOT NULL,
  `PET_STERILIZATION` tinyint(1) NOT NULL,
  `FK_MEMBER_ID` int NOT NULL,
  `PET_IMG` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `PET_INFO`
--

INSERT INTO `PET_INFO` (`PET_ID`, `PET_NAME`, `PET_GENDER`, `PET_AGE`, `PET_SPECIES`, `PET_CHIP_NUMBER`, `PET_WEIGHT`, `PET_STERILIZATION`, `FK_MEMBER_ID`, `PET_IMG`) VALUES
(1, '花花', 0, 3, 0, '900138001033499', 1.2, 1, 1, './img/back_index/h1_c1.jpg'),
(2, '毛毛', 0, 2, 1, '900042000007082', 5.5, 0, 1, './img/back_index/h1_d1.jpg'),
(3, '泡泡', 0, 2, 1, '900010220100388', 4.2, 0, 1, './img/back_index/h1_d2.jpg'),
(4, 'Eric', 1, 5, 0, '900197733297944', 1.8, 1, 2, './img/back_index/h2_c1.jpg'),
(5, 'Michelle', 0, 5, 1, '900036991024058', 4.6, 1, 3, './img/back_index/h3_d1.jpg'),
(6, 'Terry', 1, 1, 1, '900056551302772', 4.8, 0, 4, './img/back_index/h4_d1.jpg'),
(7, '德克斯特', 1, 2, 1, '900057004032001', 3.6, 1, 4, './img/back_index/h4_d2.jpg'),
(8, '英雄', 0, 1, 0, '900138011045601', 1.6, 0, 2, './img/back_index/h2_c1.jpg'),
(9, 'Tom', 1, 3, 0, '900174028560223', 1.5, 1, 4, './img/back_index/h4_c1.jpg'),
(10, 'Jerry', 1, 4, 1, '900020560002423', 5.2, 1, 5, './img/back_index/h5_d1.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `RESTAURANT_ORDER`
--

CREATE TABLE `RESTAURANT_ORDER` (
  `RESTAURANT_ORDER_ID` int NOT NULL,
  `FK_MEMBER_ID` int NOT NULL,
  `CREATE_DATE` datetime(6) NOT NULL,
  `BOOKING_DATE` datetime(6) NOT NULL,
  `NUM_OF_PEOPLE` int NOT NULL,
  `NUM_OF_PETS` int NOT NULL,
  `ORDER_STATUS` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `RESTAURANT_ORDER`
--

INSERT INTO `RESTAURANT_ORDER` (`RESTAURANT_ORDER_ID`, `FK_MEMBER_ID`, `CREATE_DATE`, `BOOKING_DATE`, `NUM_OF_PEOPLE`, `NUM_OF_PETS`, `ORDER_STATUS`) VALUES
(1, 3, '2021-05-18 11:00:00.000000', '2021-05-23 00:00:00.000000', 2, 1, 0),
(2, 4, '2021-05-19 00:34:00.000000', '2021-05-23 00:00:00.000000', 3, 2, 1),
(3, 5, '2021-05-20 07:00:52.000000', '2021-05-23 00:00:00.000000', 1, 1, 0),
(4, 1, '2021-06-12 01:56:31.000000', '2021-06-23 00:00:00.000000', 3, 2, 0),
(5, 1, '2021-06-12 01:56:51.000000', '2021-06-26 00:00:00.000000', 3, 2, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `RESTAURTAT_ORDER_DETAIL`
--

CREATE TABLE `RESTAURTAT_ORDER_DETAIL` (
  `RESTAURTAT_ORDER_DETAIL_ID` int NOT NULL,
  `FK_RESTAURANT_ORDER_ID` int NOT NULL,
  `FK_MEAL_DATA_ID` int NOT NULL,
  `MEAL_AMOUNT` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `RESTAURTAT_ORDER_DETAIL`
--

INSERT INTO `RESTAURTAT_ORDER_DETAIL` (`RESTAURTAT_ORDER_DETAIL_ID`, `FK_RESTAURANT_ORDER_ID`, `FK_MEAL_DATA_ID`, `MEAL_AMOUNT`) VALUES
(1, 1, 24, 1),
(2, 1, 17, 1),
(3, 2, 18, 2),
(4, 2, 25, 3),
(5, 3, 26, 1),
(6, 3, 19, 2),
(7, 4, 24, 1),
(8, 4, 17, 1),
(9, 5, 13, 1),
(10, 5, 14, 1),
(11, 5, 25, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `ROOM_TYPE`
--

CREATE TABLE `ROOM_TYPE` (
  `ROOM_TYPE_ID` int NOT NULL,
  `ROOM_NAME` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PRICE` int NOT NULL,
  `MAX_CAPACITY` int NOT NULL,
  `ROOM_IMG` varchar(200) NOT NULL,
  `ROOM_IMG2` varchar(200) NOT NULL,
  `ROOM_IMG3` varchar(200) NOT NULL,
  `PANNELLUM` varchar(200) DEFAULT NULL,
  `ROOM_INFO` varchar(1000) DEFAULT NULL,
  `ROOM_STATUS` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `ROOM_TYPE`
--

INSERT INTO `ROOM_TYPE` (`ROOM_TYPE_ID`, `ROOM_NAME`, `PRICE`, `MAX_CAPACITY`, `ROOM_IMG`, `ROOM_IMG2`, `ROOM_IMG3`, `PANNELLUM`, `ROOM_INFO`, `ROOM_STATUS`) VALUES
(1, '時毛玩意', 5999, 4, 'img/hotel/h_room4.jpg', 'img/hotel/h_room5.jpg', 'img/hotel/h_room6.jpg', 'img/hotel/h_panorama2.jpeg', '房內採白色的牆面，配上強烈的紅色沙發，以及對比色系的家具，形成撞色的時髦感，且窗外撒落的陽光與綠意，讓身處在都市喧囂的我們，還能觀賞波光粼粼的河面，獲得片刻的寧靜...\r\n另有開放式廚房及餐桌，選用了時尚的大理石桌板，讓您與家人或朋友，可以享受在房內使用餐點的私人空間，不受他人打擾。\r\n', 1),
(2, '神清氣貓', 3500, 2, 'img/hotel/h_room7.jpg', 'img/hotel/h_room8.jpg', 'img/hotel/h_room9.jpg', 'img/hotel/h_panorama3.jpg', '使用明亮舒適的嵌燈照明，以及大量的鏡面設計，令房間的臥室顯得有獨特的格調；周圍還配上了烤漆玻璃的櫃體，讓水藍色的門片照映，房間整個一覽無遺，不必擔心毛孩跑到您不知道的角落裡。\r\n並且化妝台上的鏡子，還接上了補光燈，絕對是您享有一天美好的開始；身旁的貓抓板也能讓貓咪與您一同互動。\r\n', 1),
(3, '雙喵愛葉', 4000, 2, 'img/hotel/h_room1.png', 'img/hotel/h_room2.png', 'img/hotel/h_room3.png', 'img/hotel/h_panorama1.jpg', '簡雅的線條設計，配上舒適的亞麻米色，房內更設有方便的工作桌，讓需要常外出工作的您，還能帶著寵物出門旅遊；考慮到毛孩的活動範圍，房內的擺設皆留有寬敞的空間，並配置隔音牆，讓您可以安心陪伴牠們玩耍、休息。\r\n浴室採乾溼分離設計，提高您的安全及便利性，並附設方型湯池，能依喜好選擇一般的泡澡或是溫泉，舒緩您一天的疲勞。\r\n', 1),
(4, '青喵淡寫', 4999, 4, 'img/hotel/h_room10.jpg', 'img/hotel/h_room11.jpg', 'img/hotel/h_room12.jpg', 'img/hotel/h_panorama4.jpg', '喜歡大自然的旅客，不妨選擇我們預約top1的房型。從踏入房間的那刻起，就讓您感受到大地的擁抱，採用松木質地的地板與家具，有陣陣飄來的清香；沙發與床組都是讓雙眼得以休息的大地色，配上樂寵後山特別栽種的植物，絕對是您愜意的首選。\r\n還有架高的液晶電視，讓您無論是在沙發旁與貓咪玩耍，或是在床上觀賞頻道，都是舒適自在的觀看角度。', 1),
(5, '舒毛一夏', 4200, 2, 'img/hotel/h_room13.jpg', 'img/hotel/h_room14.jpg', 'img/hotel/h_room15.jpg', 'img/hotel/h_panorama5.jpg', '位於最高樓層的景觀房型，打開窗簾便能俯瞰這個美麗的城市，坐在窗前讀讀喜歡的書本，或是小酌情誼，抬頭便能看見夜色，喜歡夜景的訪客千萬不能錯過。\r\n主色系採用了優雅的藍色，從床頭舒適柔軟的靠墊到地上天然的羊毛地毯，給您與毛孩最大的呵護，不必擔心孩子們活動的空間受到侷限，可以在房內自由地奔跑。', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `SET_MENU`
--

CREATE TABLE `SET_MENU` (
  `SET_MENU_ID` int NOT NULL,
  `SET_MENU_NAME` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `SET_MENU`
--

INSERT INTO `SET_MENU` (`SET_MENU_ID`, `SET_MENU_NAME`) VALUES
(1, '快速篩檢套餐'),
(2, '進階健檢套餐'),
(3, '熟齡健檢套餐');

-- --------------------------------------------------------

--
-- 資料表結構 `SHOPPING_CUSTORMRIZE`
--

CREATE TABLE `SHOPPING_CUSTORMRIZE` (
  `SHOPPING_CUSTORMRIZE_ID` int NOT NULL,
  `FK_SHOPPING_ORDER_ID` int NOT NULL,
  `SHOPPING_CUSTORMRIZE_AMOUNT` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `SHOPPING_CUSTORMRIZE`
--

INSERT INTO `SHOPPING_CUSTORMRIZE` (`SHOPPING_CUSTORMRIZE_ID`, `FK_SHOPPING_ORDER_ID`, `SHOPPING_CUSTORMRIZE_AMOUNT`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 3, 2),
(4, 3, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `SHOPPING_CUSTORMRIZE_DETAILS`
--

CREATE TABLE `SHOPPING_CUSTORMRIZE_DETAILS` (
  `SHOPPING_CUSTORMRIZE_DETAILS_ID` int NOT NULL,
  `FK_SHOPPING_CUSTORMRIZE_ID` int NOT NULL,
  `ITEM` varchar(45) NOT NULL,
  `UPLOAD_IMG` varchar(200) NOT NULL,
  `COLOR` varchar(45) NOT NULL,
  `PRICE` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `SHOPPING_CUSTORMRIZE_DETAILS`
--

INSERT INTO `SHOPPING_CUSTORMRIZE_DETAILS` (`SHOPPING_CUSTORMRIZE_DETAILS_ID`, `FK_SHOPPING_CUSTORMRIZE_ID`, `ITEM`, `UPLOAD_IMG`, `COLOR`, `PRICE`) VALUES
(1, 1, '馬克杯', '', '白', 500),
(2, 2, '棒球帽', '', '黑', 1200),
(3, 3, '環保袋', '', '紅', 600),
(4, 4, '環保袋', '', '白', 600);

-- --------------------------------------------------------

--
-- 資料表結構 `SHOPPING_ORDER`
--

CREATE TABLE `SHOPPING_ORDER` (
  `SHOPPING_ORDER_ID` int NOT NULL,
  `FK_MEMBER_ID` int NOT NULL,
  `CREATE_DATE` datetime(6) NOT NULL,
  `ADDRESSEE` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `PHONE` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ADDRESS` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ORDER_STATUS` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `SHOPPING_ORDER`
--

INSERT INTO `SHOPPING_ORDER` (`SHOPPING_ORDER_ID`, `FK_MEMBER_ID`, `CREATE_DATE`, `ADDRESSEE`, `PHONE`, `ADDRESS`, `ORDER_STATUS`) VALUES
(1, 1, '2021-05-24 00:00:00.000000', '王曉華', '0923774956', '台北市士林區承德路四段194巷10號6樓', 0),
(2, 1, '2021-05-30 00:00:00.000000', '陳德綸', '0918812715', '新竹市東區食品路275號', 0),
(3, 8, '2021-06-09 00:00:00.000000', 'Eliza Mendoza', '0935188842', '新北市樹林區備內街53巷12號7樓', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `SHOPPING_ORDER_DETAIL`
--

CREATE TABLE `SHOPPING_ORDER_DETAIL` (
  `SHOPPING_ORDER_DETAIL_ID` int NOT NULL,
  `FK_SHOPPING_ORDER_ID` int NOT NULL,
  `FK_PRODUCT_ID` int NOT NULL,
  `NUM_OF_PRODUCT` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `SHOPPING_ORDER_DETAIL`
--

INSERT INTO `SHOPPING_ORDER_DETAIL` (`SHOPPING_ORDER_DETAIL_ID`, `FK_SHOPPING_ORDER_ID`, `FK_PRODUCT_ID`, `NUM_OF_PRODUCT`) VALUES
(1, 1, 1, 1),
(2, 1, 10, 7),
(3, 1, 3, 11),
(4, 2, 12, 25),
(5, 3, 7, 2);

-- --------------------------------------------------------

--
-- 資料表結構 `SHOPPING_PRODUCT`
--

CREATE TABLE `SHOPPING_PRODUCT` (
  `PRODUCT_ID` int NOT NULL,
  `PRODUCT_NAME` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PRODUCT_PRICE` int NOT NULL,
  `PRODUCT_IMG` varchar(200) NOT NULL,
  `PRODUCT_INFO` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `PRODUCT_SOLD` int NOT NULL,
  `PRODUCT_TYPE` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PRODUCT_STATUS` tinyint(1) NOT NULL,
  `count` int NOT NULL,
  `IMG1` varchar(200) DEFAULT NULL,
  `IMG2` varchar(200) DEFAULT NULL,
  `IMG3` varchar(200) DEFAULT NULL,
  `IMG4` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `SHOPPING_PRODUCT`
--

INSERT INTO `SHOPPING_PRODUCT` (`PRODUCT_ID`, `PRODUCT_NAME`, `PRODUCT_PRICE`, `PRODUCT_IMG`, `PRODUCT_INFO`, `PRODUCT_SOLD`, `PRODUCT_TYPE`, `PRODUCT_STATUS`, `count`, `IMG1`, `IMG2`, `IMG3`, `IMG4`) VALUES
(1, '小帳棚', 81000, 'img/mall/tent_4@2x.png', '此款帳篷適用於小型犬。簡單的條紋設計，選色清新可愛。\n天然原木結構，綁帶輕鬆好穩固。內有厚實柔軟的睡墊，一面是冬天好暖不著涼，一面是夏日清爽好舒服。\n睡墊上含有止滑顆粒，讓寵物安全跑跳不位移。布料使用天然的純棉帆布，不僅透氣而且排濕。入口處的布料，可依寵物高度捲起來固定。\n睡墊有設計拉鍊，可分開墊子與睡墊套，清潔容易。拆裝容易，收納也很方便。', 0, '用品', 1, 1, 'img/mall/tent_1@2x.png', 'img/mall/tent_2@2x.png', 'img/mall/tent_3@2x.png', 'img/mall/tent4@2x.png'),
(2, '安全座椅', 1200, 'img/mall/seat1950元-2@2x.png', '項圈固定扣可調節長度，可扣住項圈更安全。\r\n口袋設計收納方便，在座椅兩側附上口袋設計，可收納玩具、背帶、尿墊等小物。\r\n可分離式坐墊，除了是安全座椅，也可以拆開單獨使用坐墊。\r\n守護毛孩，飼主有責，安全座椅防止毛孩暈車、急轉彎時重心不穩、煞車時跌落、上車就開始興奮跑跳....等狀況。', 100, '用品', 1, 1, 'img/mall/seat-1@2x.png', 'img/mall/seat-2@2x.png', 'img/mall/seat-3@2x.png', 'img/mall/seat-4@2x.png'),
(3, '成長碗架', 279, 'img/mall/成長碗架279元@2x.png', '陪伴毛孩成長，雙口調整寵物碗架。木製碗架符合中小型犬及貓進食高度，以減少進食角度問題造成消化不適的問題。\r\n高度可調能隨著毛孩體型調整，雙口碗盆斜邊大開口，進食無死角。保護頸椎，減輕頸椎腳關節負擔。\r\n陶瓷碗盆斜邊大開口，清洗容易，大直徑好就口。\r\n結構穩固，碗盆跟餐桌可以分離\r\n，清洗方便。\r\n', 13, '用品', 1, 1, 'img/mall/bowl-1@2x.png', 'img/mall/bowl-2@2x.png', 'img/mall/bowl-3@2x.png', 'img/mall/bowl-4@2x.png'),
(4, '吸水墊', 699, 'img/mall/吸水墊699元@2x.png', '這是一個很棒的吸水墊', 11, '用品', 1, 1, NULL, NULL, NULL, NULL),
(5, '奧利反光寵物胸背帶', 699, 'img/mall/奧利反光寵物胸背帶699元@2x.png', '這是一個很棒的寵物胸背帶', 6, '用品', 1, 1, NULL, NULL, NULL, NULL),
(6, '波浪斜坡寵物樓梯', 1590, 'img/mall/波浪斜坡寵物樓梯1590元@2x.png', '這是一個好玩的斜坡寵物樓梯', 9, '用品', 1, 1, NULL, NULL, NULL, NULL),
(7, '糰子貓宅', 2490, 'img/mall/糰子貓宅2490元@2x.png', '貓咪最愛的貓宅', 44, '用品', 1, 1, NULL, NULL, NULL, NULL),
(8, '寵物碗架組', 2250, 'img/mall/寵物碗架組2250元@2x.png', '寵物吃飯就靠它了', 31, '用品', 1, 1, NULL, NULL, NULL, NULL),
(9, '貓抓柱', 1690, 'img/mall/貓抓柱1690元@2x.png', '貓咪最愛的遊樂設施', 1, '用品', 1, 1, NULL, NULL, NULL, NULL),
(10, '鯊魚造型貓窩', 479, 'img/mall/鯊魚造型貓窩NT479@2x.png', '舒服的小窩，值得貓咪擁有', 6, '用品', 1, 1, NULL, NULL, NULL, NULL),
(11, '黑六角椅墊組', 3350, 'img/mall/黑六角椅墊組3350元@2x.png', '這是一個很棒的椅墊組', 2, '用品', 1, 1, NULL, NULL, NULL, NULL),
(12, '太空艙', 500000, 'img/mall/4@2x.png', '讓寵物跟你一樣擁有太空夢', 0, '用品', 1, 1, NULL, NULL, NULL, NULL),
(13, '野菜玉子燒(犬)', 85, 'img/mall/野菜玉子燒(犬)85元@2x.png', '野菜玉子燒', 131, '食品', 1, 1, NULL, NULL, NULL, NULL),
(14, '無穀如意棒', 108, 'img/mall/無穀如意棒108元@2x.png', '無穀如意棒', 22, '食品', 1, 1, NULL, NULL, NULL, NULL),
(15, '花之戀SUSHI', 88, 'img/mall/花之戀SUSHI88元@2x.png', '花之戀SUSHI', 66, '食品', 1, 1, NULL, NULL, NULL, NULL),
(16, '翻滾吧蛋炒飯', 49, 'img/mall/翻滾吧蛋炒飯49元@2x.png', '翻滾吧蛋炒飯', 77, '食品', 1, 1, NULL, NULL, NULL, NULL),
(17, '香甜地瓜雞肉餐', 85, 'img/mall/香甜地瓜雞肉餐85元@2x.png', '香甜地瓜雞肉餐', 37, '食品', 1, 1, NULL, NULL, NULL, NULL),
(18, '雞肉佐南瓜秋葵', 130, 'img/mall/雞肉佐南瓜秋葵130元@2x.png', '雞肉佐南瓜秋葵', 82, '食品', 1, 1, NULL, NULL, NULL, NULL),
(19, '清蒸泰鱸魚', 128, 'img/mall/清蒸泰鱸魚128元@2x.png', '清蒸泰鱸魚', 53, '食品', 1, 1, NULL, NULL, NULL, NULL),
(20, '古典約克燴肉漢堡', 95, 'img/mall/古典約克燴肉漢堡95元@2x.png', '古典約克燴肉漢堡', 72, '食品', 1, 1, NULL, NULL, NULL, NULL),
(21, '鮭魚佐低脂雞漢堡', 95, 'img/mall/鮭魚佐低脂雞漢堡95元@2x.png', '鮭魚佐低脂雞漢堡', 83, '食品', 1, 1, NULL, NULL, NULL, NULL),
(22, '寵物鮮食粽', 85, 'img/mall/寵物鮮食粽85元@2x.png', '寵物鮮食粽', 47, '食品', 1, 1, NULL, NULL, NULL, NULL),
(23, '麻洋芋豬後腿', 80, 'img/mall/芝麻洋芋豬後腿80元@2x.png', '麻洋芋豬後腿', 39, '食品', 1, 1, NULL, NULL, NULL, NULL),
(24, '番茄花菜牛肋脊', 80, 'img/mall/番茄花菜牛肋脊80元@2x.png', '番茄花菜牛肋脊', 16, '食品', 1, 1, NULL, NULL, NULL, NULL),
(25, '比利條紋狗狗衣服', 360, 'img/mall/clothes1@2x.png', '比利條紋狗狗衣服', 0, '虛擬試衣間', 1, 1, NULL, NULL, NULL, NULL),
(26, '瑪塔狗狗衣服', 780, 'img/mall/clothes2@2x.png', '瑪塔狗狗衣服', 0, '虛擬試衣間', 1, 1, NULL, NULL, NULL, NULL),
(27, '邦妮狗狗帽T', 500, 'img/mall/clothes3@2x.png', '邦妮狗狗帽T', 0, '虛擬試衣間', 1, 1, NULL, NULL, NULL, NULL),
(28, '艾比撞色狗狗衣服', 780, 'img/mall/clothes4@2x.png', '艾比撞色狗狗衣服', 0, '虛擬試衣間', 1, 1, NULL, NULL, NULL, NULL),
(29, '布萊登狗狗連身外套', 730, 'img/mall/clothes5@2x.png', '布萊登狗狗連身外套', 0, '虛擬試衣間', 1, 1, NULL, NULL, NULL, NULL),
(30, '防風保暖背心', 780, 'img/mall/clothes6@2x.png', '防風保暖背心', 0, '虛擬試衣間', 1, 1, NULL, NULL, NULL, NULL),
(31, '狗狗運動風帽T', 450, 'img/mall/clothes7@2x.png', '狗狗運動風帽T', 0, '虛擬試衣間', 1, 1, NULL, NULL, NULL, NULL),
(32, '韓系鋪棉寵物背心', 400, 'img/mall/clothes8@2x.png', '韓系鋪棉寵物背心', 0, '虛擬試衣間', 1, 1, NULL, NULL, NULL, NULL),
(33, '韓系鋪棉寵物背心', 690, 'img/mall/clothes9@2x.png', '韓系鋪棉寵物背心', 0, '虛擬試衣間', 1, 1, NULL, NULL, NULL, NULL);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `DOCTOR_SUGGESTION`
--
ALTER TABLE `DOCTOR_SUGGESTION`
  ADD PRIMARY KEY (`DOCTOR_SUGGESTION_ID`),
  ADD KEY `DOCTOR_SUGGESTION_FK_HOSPITAL_ORDER_ID_idx` (`FK_HOSPITAL_ORDER_ID`);

--
-- 資料表索引 `EMERGENCY`
--
ALTER TABLE `EMERGENCY`
  ADD PRIMARY KEY (`EMERGENCY_ID`),
  ADD KEY `FK_PET_ID_idx` (`FK_PET_ID`);

--
-- 資料表索引 `HEALTH_CHECK`
--
ALTER TABLE `HEALTH_CHECK`
  ADD PRIMARY KEY (`HEALTH_CHECK_ID`);

--
-- 資料表索引 `HEALTH_CHECK& SET`
--
ALTER TABLE `HEALTH_CHECK& SET`
  ADD PRIMARY KEY (`HEALTH_CHECK & SET_ID`),
  ADD KEY `FK_SET_ID_idx` (`FK_SET_MENU_ID`),
  ADD KEY `FK_HEALTH_CHECK_ID_idx` (`FK_HEALTH_CHECK_ID`);

--
-- 資料表索引 `HEALTH_REPORT`
--
ALTER TABLE `HEALTH_REPORT`
  ADD PRIMARY KEY (`HEALTH_REPORT_ID`,`SEQ`),
  ADD KEY `HEALTH_REPORT_HOSPITAL_ORDER_ID_idx` (`FK_HOSPITAL_ORDER_ID`),
  ADD KEY `HEALTH_REPORT_HEALTH_CHECK_ID_idx` (`FK_HEALTH_CHECK_ID`);

--
-- 資料表索引 `HOSPITAL_ORDER`
--
ALTER TABLE `HOSPITAL_ORDER`
  ADD PRIMARY KEY (`HOSPITAL_ORDER_ID`),
  ADD KEY `FK_MENBER_ID_idx` (`FK_MEMBER_ID`),
  ADD KEY `FK_PET_ID_idx` (`FK_PET_ID`),
  ADD KEY `FK_HELTH_CHECK_ID1_idx` (`FK_HELTH_CHECK_ID`),
  ADD KEY `FK_SET_MENU_ID_idx` (`FK_SET_MENU_ID`),
  ADD KEY `HOSPITAL_ORDER_HELTH_CHECK_ID2_idx` (`FK_HELTH_CHECK_ID2`);

--
-- 資料表索引 `HOTEL_ORDER`
--
ALTER TABLE `HOTEL_ORDER`
  ADD PRIMARY KEY (`HOTEL_ORDER_ID`),
  ADD KEY `FK_MEMBER_ID_idx` (`FK_MEMBER_ID`),
  ADD KEY `FK_ROOM_TYPE_ID_idx` (`FK_ROOM_TYPE_ID`);

--
-- 資料表索引 `MEAL_COSTURMRIZE_DETAILS`
--
ALTER TABLE `MEAL_COSTURMRIZE_DETAILS`
  ADD PRIMARY KEY (`MEAL_COSTURMRIZE_DETAILS_ID`),
  ADD KEY `FK_MEAL_COSTURMRIZE_ID_idx` (`FK_MEAL_COSTURMRIZE_ID`);

--
-- 資料表索引 `MEAL_CUSTORMRIZE`
--
ALTER TABLE `MEAL_CUSTORMRIZE`
  ADD PRIMARY KEY (`MEAL_CUSTORMRIZE_ID`),
  ADD KEY `FK_RESTAURANT_ORDER_ID_idx` (`FK_RESTAURANT_ORDER_ID`);

--
-- 資料表索引 `MEAL_DATA`
--
ALTER TABLE `MEAL_DATA`
  ADD PRIMARY KEY (`MEAL_DATA_ID`);

--
-- 資料表索引 `MEMBER`
--
ALTER TABLE `MEMBER`
  ADD PRIMARY KEY (`MEMBER_ID`),
  ADD UNIQUE KEY `USERNAME_UNIQUE` (`ACCOUNT`);

--
-- 資料表索引 `MESSAGE_LIST`
--
ALTER TABLE `MESSAGE_LIST`
  ADD PRIMARY KEY (`MESSAGE_LIST_ID`),
  ADD KEY `FK_SHOPPING_ORDER_ID_idx` (`FK_SHOPPING_ORDER_ID`);

--
-- 資料表索引 `NEWS`
--
ALTER TABLE `NEWS`
  ADD PRIMARY KEY (`NEWS_ID`);

--
-- 資料表索引 `PET_INFO`
--
ALTER TABLE `PET_INFO`
  ADD PRIMARY KEY (`PET_ID`),
  ADD KEY `FK_MEMBER_ID_idx` (`FK_MEMBER_ID`);

--
-- 資料表索引 `RESTAURANT_ORDER`
--
ALTER TABLE `RESTAURANT_ORDER`
  ADD PRIMARY KEY (`RESTAURANT_ORDER_ID`),
  ADD UNIQUE KEY `CREATE_DATE_UNIQUE` (`CREATE_DATE`),
  ADD KEY `FK_MEMBER_ID_idx` (`FK_MEMBER_ID`);

--
-- 資料表索引 `RESTAURTAT_ORDER_DETAIL`
--
ALTER TABLE `RESTAURTAT_ORDER_DETAIL`
  ADD PRIMARY KEY (`RESTAURTAT_ORDER_DETAIL_ID`),
  ADD KEY `RESTAURTAT_ORDER_DETAIL_RESTAURANT_ORDER_ID_idx` (`FK_RESTAURANT_ORDER_ID`),
  ADD KEY `RESTAURTAT_ORDER_DETAIL_MEAL_DATA_ID1_idx` (`FK_MEAL_DATA_ID`);

--
-- 資料表索引 `ROOM_TYPE`
--
ALTER TABLE `ROOM_TYPE`
  ADD PRIMARY KEY (`ROOM_TYPE_ID`);

--
-- 資料表索引 `SET_MENU`
--
ALTER TABLE `SET_MENU`
  ADD PRIMARY KEY (`SET_MENU_ID`);

--
-- 資料表索引 `SHOPPING_CUSTORMRIZE`
--
ALTER TABLE `SHOPPING_CUSTORMRIZE`
  ADD PRIMARY KEY (`SHOPPING_CUSTORMRIZE_ID`),
  ADD KEY `SHOPPING_CUSTORMRIZE_SHOPPING_ORDER_ID_idx` (`FK_SHOPPING_ORDER_ID`);

--
-- 資料表索引 `SHOPPING_CUSTORMRIZE_DETAILS`
--
ALTER TABLE `SHOPPING_CUSTORMRIZE_DETAILS`
  ADD PRIMARY KEY (`SHOPPING_CUSTORMRIZE_DETAILS_ID`),
  ADD KEY `SHOPPING_CUSTORMRIZE_DETAILS_SHOPPING_CUSTORMRIZE_ID_idx` (`FK_SHOPPING_CUSTORMRIZE_ID`);

--
-- 資料表索引 `SHOPPING_ORDER`
--
ALTER TABLE `SHOPPING_ORDER`
  ADD PRIMARY KEY (`SHOPPING_ORDER_ID`),
  ADD KEY `FK_MEMBER_ID_idx` (`FK_MEMBER_ID`);

--
-- 資料表索引 `SHOPPING_ORDER_DETAIL`
--
ALTER TABLE `SHOPPING_ORDER_DETAIL`
  ADD PRIMARY KEY (`SHOPPING_ORDER_DETAIL_ID`),
  ADD KEY `FK_SHOPPING_ORDER_ID_idx` (`FK_SHOPPING_ORDER_ID`),
  ADD KEY `FK_PRODUCT_ID_idx` (`FK_PRODUCT_ID`);

--
-- 資料表索引 `SHOPPING_PRODUCT`
--
ALTER TABLE `SHOPPING_PRODUCT`
  ADD PRIMARY KEY (`PRODUCT_ID`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `DOCTOR_SUGGESTION`
--
ALTER TABLE `DOCTOR_SUGGESTION`
  MODIFY `DOCTOR_SUGGESTION_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `EMERGENCY`
--
ALTER TABLE `EMERGENCY`
  MODIFY `EMERGENCY_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `HEALTH_CHECK`
--
ALTER TABLE `HEALTH_CHECK`
  MODIFY `HEALTH_CHECK_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `HEALTH_CHECK& SET`
--
ALTER TABLE `HEALTH_CHECK& SET`
  MODIFY `HEALTH_CHECK & SET_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `HOSPITAL_ORDER`
--
ALTER TABLE `HOSPITAL_ORDER`
  MODIFY `HOSPITAL_ORDER_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `HOTEL_ORDER`
--
ALTER TABLE `HOTEL_ORDER`
  MODIFY `HOTEL_ORDER_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `MEAL_COSTURMRIZE_DETAILS`
--
ALTER TABLE `MEAL_COSTURMRIZE_DETAILS`
  MODIFY `MEAL_COSTURMRIZE_DETAILS_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `MEAL_CUSTORMRIZE`
--
ALTER TABLE `MEAL_CUSTORMRIZE`
  MODIFY `MEAL_CUSTORMRIZE_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `MEAL_DATA`
--
ALTER TABLE `MEAL_DATA`
  MODIFY `MEAL_DATA_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `MEMBER`
--
ALTER TABLE `MEMBER`
  MODIFY `MEMBER_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `MESSAGE_LIST`
--
ALTER TABLE `MESSAGE_LIST`
  MODIFY `MESSAGE_LIST_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `NEWS`
--
ALTER TABLE `NEWS`
  MODIFY `NEWS_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `PET_INFO`
--
ALTER TABLE `PET_INFO`
  MODIFY `PET_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `RESTAURANT_ORDER`
--
ALTER TABLE `RESTAURANT_ORDER`
  MODIFY `RESTAURANT_ORDER_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `RESTAURTAT_ORDER_DETAIL`
--
ALTER TABLE `RESTAURTAT_ORDER_DETAIL`
  MODIFY `RESTAURTAT_ORDER_DETAIL_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ROOM_TYPE`
--
ALTER TABLE `ROOM_TYPE`
  MODIFY `ROOM_TYPE_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `SET_MENU`
--
ALTER TABLE `SET_MENU`
  MODIFY `SET_MENU_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `SHOPPING_CUSTORMRIZE`
--
ALTER TABLE `SHOPPING_CUSTORMRIZE`
  MODIFY `SHOPPING_CUSTORMRIZE_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `SHOPPING_CUSTORMRIZE_DETAILS`
--
ALTER TABLE `SHOPPING_CUSTORMRIZE_DETAILS`
  MODIFY `SHOPPING_CUSTORMRIZE_DETAILS_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `SHOPPING_ORDER`
--
ALTER TABLE `SHOPPING_ORDER`
  MODIFY `SHOPPING_ORDER_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `SHOPPING_ORDER_DETAIL`
--
ALTER TABLE `SHOPPING_ORDER_DETAIL`
  MODIFY `SHOPPING_ORDER_DETAIL_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `SHOPPING_PRODUCT`
--
ALTER TABLE `SHOPPING_PRODUCT`
  MODIFY `PRODUCT_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `DOCTOR_SUGGESTION`
--
ALTER TABLE `DOCTOR_SUGGESTION`
  ADD CONSTRAINT `DOCTOR_SUGGESTION_FK_HOSPITAL_ORDER_ID` FOREIGN KEY (`FK_HOSPITAL_ORDER_ID`) REFERENCES `HOSPITAL_ORDER` (`HOSPITAL_ORDER_ID`);

--
-- 資料表的限制式 `EMERGENCY`
--
ALTER TABLE `EMERGENCY`
  ADD CONSTRAINT `FK_PET_ID` FOREIGN KEY (`FK_PET_ID`) REFERENCES `PET_INFO` (`PET_ID`);

--
-- 資料表的限制式 `HEALTH_CHECK& SET`
--
ALTER TABLE `HEALTH_CHECK& SET`
  ADD CONSTRAINT `HEALTH_CHECK_AND_ SET_HEALTH_CHECK_ID` FOREIGN KEY (`FK_HEALTH_CHECK_ID`) REFERENCES `HEALTH_CHECK` (`HEALTH_CHECK_ID`),
  ADD CONSTRAINT `HEALTH_CHECK_AND_ SET_SET_MENU_ID` FOREIGN KEY (`FK_SET_MENU_ID`) REFERENCES `SET_MENU` (`SET_MENU_ID`);

--
-- 資料表的限制式 `HEALTH_REPORT`
--
ALTER TABLE `HEALTH_REPORT`
  ADD CONSTRAINT `HEALTH_REPORT_HEALTH_CHECK_ID` FOREIGN KEY (`FK_HEALTH_CHECK_ID`) REFERENCES `HEALTH_CHECK` (`HEALTH_CHECK_ID`),
  ADD CONSTRAINT `HEALTH_REPORT_HOSPITAL_ORDER_ID` FOREIGN KEY (`FK_HOSPITAL_ORDER_ID`) REFERENCES `HOSPITAL_ORDER` (`HOSPITAL_ORDER_ID`);

--
-- 資料表的限制式 `HOSPITAL_ORDER`
--
ALTER TABLE `HOSPITAL_ORDER`
  ADD CONSTRAINT `HOSPITAL_ORDER_HELTH_CHECK_ID` FOREIGN KEY (`FK_HELTH_CHECK_ID`) REFERENCES `HEALTH_CHECK` (`HEALTH_CHECK_ID`),
  ADD CONSTRAINT `HOSPITAL_ORDER_HELTH_CHECK_ID2` FOREIGN KEY (`FK_HELTH_CHECK_ID2`) REFERENCES `HEALTH_CHECK` (`HEALTH_CHECK_ID`),
  ADD CONSTRAINT `HOSPITAL_ORDER_MEMBER_ID` FOREIGN KEY (`FK_MEMBER_ID`) REFERENCES `MEMBER` (`MEMBER_ID`),
  ADD CONSTRAINT `HOSPITAL_ORDER_PET_ID` FOREIGN KEY (`FK_PET_ID`) REFERENCES `PET_INFO` (`PET_ID`),
  ADD CONSTRAINT `HOSPITAL_ORDER_SET_MENU_ID` FOREIGN KEY (`FK_SET_MENU_ID`) REFERENCES `SET_MENU` (`SET_MENU_ID`);

--
-- 資料表的限制式 `HOTEL_ORDER`
--
ALTER TABLE `HOTEL_ORDER`
  ADD CONSTRAINT `HOTEL_ORDER_MEMBER_ID` FOREIGN KEY (`FK_MEMBER_ID`) REFERENCES `MEMBER` (`MEMBER_ID`),
  ADD CONSTRAINT `HOTEL_ORDER_ROOM_TYPE_ID` FOREIGN KEY (`FK_ROOM_TYPE_ID`) REFERENCES `ROOM_TYPE` (`ROOM_TYPE_ID`);

--
-- 資料表的限制式 `MEAL_COSTURMRIZE_DETAILS`
--
ALTER TABLE `MEAL_COSTURMRIZE_DETAILS`
  ADD CONSTRAINT `FK_MEAL_COSTURMRIZE_ID` FOREIGN KEY (`FK_MEAL_COSTURMRIZE_ID`) REFERENCES `MEAL_CUSTORMRIZE` (`MEAL_CUSTORMRIZE_ID`);

--
-- 資料表的限制式 `MEAL_CUSTORMRIZE`
--
ALTER TABLE `MEAL_CUSTORMRIZE`
  ADD CONSTRAINT `FK_RESTAURANT_ORDER_ID` FOREIGN KEY (`FK_RESTAURANT_ORDER_ID`) REFERENCES `RESTAURANT_ORDER` (`RESTAURANT_ORDER_ID`);

--
-- 資料表的限制式 `MESSAGE_LIST`
--
ALTER TABLE `MESSAGE_LIST`
  ADD CONSTRAINT `MESSAGE_LIST_SHOPPING_ORDER_ID` FOREIGN KEY (`FK_SHOPPING_ORDER_ID`) REFERENCES `SHOPPING_ORDER` (`SHOPPING_ORDER_ID`);

--
-- 資料表的限制式 `PET_INFO`
--
ALTER TABLE `PET_INFO`
  ADD CONSTRAINT `PET_INFO_MEMBER_ID` FOREIGN KEY (`FK_MEMBER_ID`) REFERENCES `MEMBER` (`MEMBER_ID`);

--
-- 資料表的限制式 `RESTAURANT_ORDER`
--
ALTER TABLE `RESTAURANT_ORDER`
  ADD CONSTRAINT `RESTAURANT_ORDER_MEMBER_ID` FOREIGN KEY (`FK_MEMBER_ID`) REFERENCES `MEMBER` (`MEMBER_ID`);

--
-- 資料表的限制式 `RESTAURTAT_ORDER_DETAIL`
--
ALTER TABLE `RESTAURTAT_ORDER_DETAIL`
  ADD CONSTRAINT `RESTAURTAT_ORDER_DETAIL_MEAL_DATA_ID1` FOREIGN KEY (`FK_MEAL_DATA_ID`) REFERENCES `MEAL_DATA` (`MEAL_DATA_ID`),
  ADD CONSTRAINT `RESTAURTAT_ORDER_DETAIL_RESTAURANT_ORDER_ID` FOREIGN KEY (`FK_RESTAURANT_ORDER_ID`) REFERENCES `RESTAURANT_ORDER` (`RESTAURANT_ORDER_ID`);

--
-- 資料表的限制式 `SHOPPING_CUSTORMRIZE`
--
ALTER TABLE `SHOPPING_CUSTORMRIZE`
  ADD CONSTRAINT `SHOPPING_CUSTORMRIZE_SHOPPING_ORDER_ID` FOREIGN KEY (`FK_SHOPPING_ORDER_ID`) REFERENCES `SHOPPING_ORDER` (`SHOPPING_ORDER_ID`);

--
-- 資料表的限制式 `SHOPPING_CUSTORMRIZE_DETAILS`
--
ALTER TABLE `SHOPPING_CUSTORMRIZE_DETAILS`
  ADD CONSTRAINT `SHOPPING_CUSTORMRIZE_DETAILS_SHOPPING_CUSTORMRIZE_ID` FOREIGN KEY (`FK_SHOPPING_CUSTORMRIZE_ID`) REFERENCES `SHOPPING_CUSTORMRIZE` (`SHOPPING_CUSTORMRIZE_ID`);

--
-- 資料表的限制式 `SHOPPING_ORDER`
--
ALTER TABLE `SHOPPING_ORDER`
  ADD CONSTRAINT `SHOPPING_ORDER_MEMBER_ID` FOREIGN KEY (`FK_MEMBER_ID`) REFERENCES `MEMBER` (`MEMBER_ID`);

--
-- 資料表的限制式 `SHOPPING_ORDER_DETAIL`
--
ALTER TABLE `SHOPPING_ORDER_DETAIL`
  ADD CONSTRAINT `SHOPPING_ORDER_DETAIL_PRODUCT_ID` FOREIGN KEY (`FK_PRODUCT_ID`) REFERENCES `SHOPPING_PRODUCT` (`PRODUCT_ID`),
  ADD CONSTRAINT `SHOPPING_ORDER_DETAIL_SHOPPING_ORDER_ID` FOREIGN KEY (`FK_SHOPPING_ORDER_ID`) REFERENCES `SHOPPING_ORDER` (`SHOPPING_ORDER_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
