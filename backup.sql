-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: motoShop
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `motoShop`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `motoShop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `motoShop`;

--
-- Table structure for table `motorcycle`
--

DROP TABLE IF EXISTS `motorcycle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `motorcycle` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `idSeler` int unsigned NOT NULL,
  `imgPath` text,
  `price` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idSeler` (`idSeler`),
  CONSTRAINT `motorcycle_ibfk_1` FOREIGN KEY (`idSeler`) REFERENCES `selerMan` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `motorcycle`
--

LOCK TABLES `motorcycle` WRITE;
/*!40000 ALTER TABLE `motorcycle` DISABLE KEYS */;
INSERT INTO `motorcycle` VALUES (29,'CB Twister 2020','Além de acompanhar o impressionante desenho da motocicleta seguindo o fluxo de linhas marcantes e modernas da rabeta, a lanterna de LED assegura uma excelente luminosidade.',30,'a0925c24ca811878182de92827e038d1',16423),(30,'CB 500F','Sentir o vento no rosto nunca foi tão emocionante. A CB 500F teve seu torque redefinido, entregando mais eficiência nas saídas e retomadas. Sua pilotagem com muita performance.',30,'68b53831e8861f1eecbe261703e19684',29100),(31,'CB 1000R','Com tecnologia blackout e diferentes cores para facilitar a visualização das principais informações de pilotagem, o painel digital da CB 1000R conta ainda com indicador de troca de marcha configurável (Upshit Light) para máxima performance.',30,'ef12e57f97f648b60733eb568d22590f',60900),(32,'S 1000 R','A tranquilidade que você precisava para você conquistar a sua BMW S 1000 R: taxa especial de 0,69% ao mês no plano BMW Select + emplacamento grátis e 3 revisões pagas* para você! Além de 3 anos de garantia com assistência 24h. Feche o ano de BMW nova. ',32,'d86a89347edfb7526436a37129bb2b35',62900),(33,'G 310 R','A tranquilidade que você precisava para você conquistar a sua BMW G 310 R: taxa especial de 0,69% ao mês no plano BMW Select + emplacamento grátis e 3 revisões pagas* para você! Além de 3 anos de garantia com assistência 24h. Feche o ano de BMW nova.',32,'64aa273f06ff5b389521dd862e722219',29500),(34,'BMW S 1000 RR','A tranquilidade que você precisava para você conquistar a sua BMW S 1000 RR: taxa especial de 0,69% ao mês no plano BMW Select + emplacamento grátis e 3 revisões pagas* para você! Além de 3 anos de garantia com assistência 24h. Feche o ano de BMW nova.',32,'57722d0e37115da36d56154193c20c4a',76900),(35,'R3 MONSTER','A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance.\n\n\n',33,'8939f0cafce72d58d26ad8368b76363f',27690),(36,'MT-03 ABS','A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance.',33,'52c156aef2074b4b3d0e8798cf24143b',25990),(37,'FACTOR 125i UBS','A Factor 125i UBS é a escolha perfeita para quem procura uma moto resistente para o uso diário. O motor durável e econômico, conta com a tecnologia Blueflex, para você escolher entre gasolina, etanol ou ambos, o que for mais econômico.',33,'37504b4e61b8b1585b4089924014c536',10390);
/*!40000 ALTER TABLE `motorcycle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `selerMan`
--

DROP TABLE IF EXISTS `selerMan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `selerMan` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `imgPath` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `selerMan`
--

LOCK TABLES `selerMan` WRITE;
/*!40000 ALTER TABLE `selerMan` DISABLE KEYS */;
INSERT INTO `selerMan` VALUES (30,'Honda','Honda Motor Company, Limited (本田技研工業株式会社 Honda Giken Kōgyō Kabushiki Kaisha?, Instituto Honda de Pesquisa Tecnológica Companhia Limitada) é um dos mais importantes fabricantes de automóveis e motocicletas do mundo. Fundada por Soichiro Honda. Teve sua pronúncia \"ronda\" consolidada - antes \"ondá\" - após sua expansão e entrada no Mercado Alemão, determinando assim uma marca universal [2]. Embora seja uma empresa sediada no Japão, a Honda exporta os seus veículos para o mundo inteiro.','ccaf15498dc2ab55d8c4a1e7219bcf3b'),(31,'Toyota Motor','Toyota Motor é uma fabricante automotivo japonês com sede na Toyota, província de Aichi, no Japão. Em março de 2014, a corporação multinacional era composta por 338.875 funcionários em todo o mundo[1] e, em fevereiro de 2016, era a 13ª maior empresa do mundo por receita. A Toyota foi o maior fabricante de automóveis em 2012 (por produção) à frente do Grupo Volkswagen e da General Motors.[2] Em 25 de julho de 2012, a companhia relatou a produção de seu veículo número 200 milhões.[3] A Toyota é a primeira fabricante de automóveis do mundo a produzir mais de 10 milhões de veículos por ano. Fez isso em 2012 de acordo com a OICA,[2] e em 2013 de acordo com dados da empresa. Em julho de 2014, era a maior empresa listada no Japão por capitalização de mercado (vale mais do que o dobro da segunda classificada, a SoftBank)[4] e por receitas.[5]','19bfc2a5ac0732717f6bfb8d1d6df4d9'),(32,'BMW','Bayerische Motoren Werke AG (abreviatura BMW AG, em português: Fábrica de Motores da Baviera) é uma empresa alemã, fabricante de automóveis e motocicletas, sediada em Munique, Baviera. A peculiaridade da empresa é que ela segue uma estratégia de marca premium puro: desenvolve, fabrica e comercializa seus produtos sob as marcas Mini, Rolls-Royce Motor Cars e BMW.[1]','757637fd72de7f42daf9b4d76c382cf4'),(33,'Yamaha','A Yamaha Corporation (ヤマハ株式会社 - Yamaha Kabushiki Gaisha) é uma companhia japonesa fabricante de um enorme leque de produtos em várias e distintas áreas, faz parte do keiretsu Fuyo.','730d5a1dfb3e5b9082a5735d7da25119');
/*!40000 ALTER TABLE `selerMan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-10 19:28:32
