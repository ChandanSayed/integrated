const StarBg = () => {
  const star = {
    height: '1px',
    width: '1px',
    position: 'fixed',
    inset: '0',
    boxShadow: `126px 167px hsla(0, 0%, 100%, 0.7), 907px 1782px hsla(0, 0%, 100%, 0.5), 1045px 1434px hsla(0, 0%, 100%, 0.5), 959px 1636px hsla(0, 0%, 100%, 0.5), 1068px 27px hsla(0, 0%, 100%, 0.5), 949px 461px hsla(0, 0%, 100%, 0.5), 668px 328px hsla(0, 0%, 100%, 0.5), 128px 1293px hsla(0, 0%, 100%, 0.5), 870px 376px hsla(0, 0%, 100%, 0.5), 1225px 919px hsla(0, 0%, 100%, 0.5), 1342px 429px hsla(0, 0%, 100%, 0.5), 1481px 1063px hsla(0, 0%, 100%, 0.5), 799px 53px hsla(0, 0%, 100%, 0.5), 214px 1122px hsla(0, 0%, 100%, 0.5), 425px 218px hsla(0, 0%, 100%, 0.5), 1532px 793px hsla(0, 0%, 100%, 0.5), 873px 23px hsla(0, 0%, 100%, 0.5), 1880px 1701px hsla(0, 0%, 100%, 0.5), 207px 1592px hsla(0, 0%, 100%, 0.5), 1005px 1160px hsla(0, 0%, 100%, 0.5), 509px 532px hsla(0, 0%, 100%, 0.5), 1818px 1311px hsla(0, 0%, 100%, 0.5), 1112px 10px hsla(0, 0%, 100%, 0.5), 1696px 1213px hsla(0, 0%, 100%, 0.5), 1193px 1812px hsla(0, 0%, 100%, 0.5), 274px 1247px hsla(0, 0%, 100%, 0.5), 1789px 433px hsla(0, 0%, 100%, 0.5), 1937px 1953px hsla(0, 0%, 100%, 0.5), 968px 276px hsla(0, 0%, 100%, 0.5), 1682px 1452px hsla(0, 0%, 100%, 0.5), 1881px 1147px hsla(0, 0%, 100%, 0.5), 1504px 345px hsla(0, 0%, 100%, 0.5), 93px 224px hsla(0, 0%, 100%, 0.5), 1720px 156px hsla(0, 0%, 100%, 0.5), 458px 1236px hsla(0, 0%, 100%, 0.5), 1428px 1317px hsla(0, 0%, 100%, 0.5), 1473px 1338px hsla(0, 0%, 100%, 0.5), 348px 1731px hsla(0, 0%, 100%, 0.5), 1512px 1779px hsla(0, 0%, 100%, 0.5), 147px 1876px hsla(0, 0%, 100%, 0.5), 285px 1545px hsla(0, 0%, 100%, 0.5), 76px 510px hsla(0, 0%, 100%, 0.5), 465px 1796px hsla(0, 0%, 100%, 0.5), 475px 257px hsla(0, 0%, 100%, 0.5), 485px 648px hsla(0, 0%, 100%, 0.5), 677px 1723px hsla(0, 0%, 100%, 0.5), 189px 341px hsla(0, 0%, 100%, 0.5), 470px 462px hsla(0, 0%, 100%, 0.5), 226px 131px hsla(0, 0%, 100%, 0.5), 1014px 506px hsla(0, 0%, 100%, 0.5), 1692px 1080px hsla(0, 0%, 100%, 0.5), 1598px 738px hsla(0, 0%, 100%, 0.5), 17px 624px hsla(0, 0%, 100%, 0.5), 1138px 1118px hsla(0, 0%, 100%, 0.5), 229px 1874px hsla(0, 0%, 100%, 0.5), 1673px 424px hsla(0, 0%, 100%, 0.5), 173px 1242px hsla(0, 0%, 100%, 0.5), 884px 1983px hsla(0, 0%, 100%, 0.5), 1812px 1777px hsla(0, 0%, 100%, 0.5), 42px 848px hsla(0, 0%, 100%, 0.5), 1322px 1359px hsla(0, 0%, 100%, 0.5), 1827px 286px hsla(0, 0%, 100%, 0.5), 1565px 469px hsla(0, 0%, 100%, 0.5), 938px 126px hsla(0, 0%, 100%, 0.5), 382px 317px hsla(0, 0%, 100%, 0.5), 1678px 72px hsla(0, 0%, 100%, 0.5), 1559px 361px hsla(0, 0%, 100%, 0.5), 65px 1029px hsla(0, 0%, 100%, 0.5), 1138px 1228px hsla(0, 0%, 100%, 0.5), 90px 1671px hsla(0, 0%, 100%, 0.5), 166px 39px hsla(0, 0%, 100%, 0.5), 1006px 1297px hsla(0, 0%, 100%, 0.5), 630px 1924px hsla(0, 0%, 100%, 0.5), 728px 443px hsla(0, 0%, 100%, 0.5), 167px 1349px hsla(0, 0%, 100%, 0.5), 1683px 175px hsla(0, 0%, 100%, 0.5), 1029px 865px hsla(0, 0%, 100%, 0.5), 1237px 914px hsla(0, 0%, 100%, 0.5), 211px 47px hsla(0, 0%, 100%, 0.5), 848px 962px hsla(0, 0%, 100%, 0.5), 1843px 724px hsla(0, 0%, 100%, 0.5), 1003px 1229px hsla(0, 0%, 100%, 0.5), 36px 213px hsla(0, 0%, 100%, 0.5), 11px 1076px hsla(0, 0%, 100%, 0.5), 1862px 78px hsla(0, 0%, 100%, 0.5), 583px 79px hsla(0, 0%, 100%, 0.5), 1567px 966px hsla(0, 0%, 100%, 0.5), 82px 370px hsla(0, 0%, 100%, 0.5), 1485px 1177px hsla(0, 0%, 100%, 0.5), 292px 1689px hsla(0, 0%, 100%, 0.5), 1584px 299px hsla(0, 0%, 100%, 0.5), 1907px 1357px hsla(0, 0%, 100%, 0.5), 452px 1849px hsla(0, 0%, 100%, 0.5), 1991px 1033px hsla(0, 0%, 100%, 0.5), 1686px 92px hsla(0, 0%, 100%, 0.5), 268px 1654px hsla(0, 0%, 100%, 0.5), 1598px 1632px hsla(0, 0%, 100%, 0.5), 617px 1114px hsla(0, 0%, 100%, 0.5), 942px 634px hsla(0, 0%, 100%, 0.5), 611px 1065px hsla(0, 0%, 100%, 0.5), 673px 1258px hsla(0, 0%, 100%, 0.5), 466px 911px hsla(0, 0%, 100%, 0.5), 147px 1904px hsla(0, 0%, 100%, 0.5), 1344px 1120px hsla(0, 0%, 100%, 0.5), 1552px 1239px hsla(0, 0%, 100%, 0.5), 1026px 1386px hsla(0, 0%, 100%, 0.5), 464px 583px hsla(0, 0%, 100%, 0.5), 323px 1674px hsla(0, 0%, 100%, 0.5), 224px 1811px hsla(0, 0%, 100%, 0.5), 402px 271px hsla(0, 0%, 100%, 0.5), 739px 597px hsla(0, 0%, 100%, 0.5), 1861px 500px hsla(0, 0%, 100%, 0.5), 1157px 1654px hsla(0, 0%, 100%, 0.5), 1801px 1623px hsla(0, 0%, 100%, 0.5), 849px 1945px hsla(0, 0%, 100%, 0.5), 762px 1816px hsla(0, 0%, 100%, 0.5), 348px 486px hsla(0, 0%, 100%, 0.5), 1604px 71px hsla(0, 0%, 100%, 0.5), 409px 667px hsla(0, 0%, 100%, 0.5), 1154px 1128px hsla(0, 0%, 100%, 0.5), 824px 399px hsla(0, 0%, 100%, 0.5), 1172px 306px hsla(0, 0%, 100%, 0.5), 578px 1086px hsla(0, 0%, 100%, 0.5), 1722px 370px hsla(0, 0%, 100%, 0.5), 1813px 545px hsla(0, 0%, 100%, 0.5), 182px 1628px hsla(0, 0%, 100%, 0.5), 1513px 1453px hsla(0, 0%, 100%, 0.5), 1299px 1180px hsla(0, 0%, 100%, 0.5), 442px 495px hsla(0, 0%, 100%, 0.5), 1583px 1040px hsla(0, 0%, 100%, 0.5), 1526px 1796px hsla(0, 0%, 100%, 0.5), 506px 211px hsla(0, 0%, 100%, 0.5), 1057px 887px hsla(0, 0%, 100%, 0.5), 292px 2000px hsla(0, 0%, 100%, 0.5), 115px 1509px hsla(0, 0%, 100%, 0.5), 997px 374px hsla(0, 0%, 100%, 0.5), 1797px 479px hsla(0, 0%, 100%, 0.5), 629px 1058px hsla(0, 0%, 100%, 0.5), 1820px 1px hsla(0, 0%, 100%, 0.5), 439px 1738px hsla(0, 0%, 100%, 0.5), 1532px 902px hsla(0, 0%, 100%, 0.5), 1570px 14px hsla(0, 0%, 100%, 0.5), 110px 128px hsla(0, 0%, 100%, 0.5), 1012px 1063px hsla(0, 0%, 100%, 0.5), 1604px 1051px hsla(0, 0%, 100%, 0.5), 1104px 1353px hsla(0, 0%, 100%, 0.5), 982px 1107px hsla(0, 0%, 100%, 0.5), 385px 580px hsla(0, 0%, 100%, 0.5), 497px 1240px hsla(0, 0%, 100%, 0.5), 825px 235px hsla(0, 0%, 100%, 0.5), 475px 1381px hsla(0, 0%, 100%, 0.5), 1375px 412px hsla(0, 0%, 100%, 0.5), 960px 1088px hsla(0, 0%, 100%, 0.5), 1238px 1099px hsla(0, 0%, 100%, 0.5), 1465px 74px hsla(0, 0%, 100%, 0.5), 94px 222px hsla(0, 0%, 100%, 0.5), 586px 1913px hsla(0, 0%, 100%, 0.5), 1386px 1496px hsla(0, 0%, 100%, 0.5), 135px 118px hsla(0, 0%, 100%, 0.5), 718px 211px hsla(0, 0%, 100%, 0.5), 1134px 1913px hsla(0, 0%, 100%, 0.5), 1927px 1017px hsla(0, 0%, 100%, 0.5), 968px 1315px hsla(0, 0%, 100%, 0.5), 1015px 343px hsla(0, 0%, 100%, 0.5), 1095px 1545px hsla(0, 0%, 100%, 0.5), 811px 1487px hsla(0, 0%, 100%, 0.5), 1816px 267px hsla(0, 0%, 100%, 0.5), 882px 393px hsla(0, 0%, 100%, 0.5), 365px 1415px hsla(0, 0%, 100%, 0.5), 568px 786px hsla(0, 0%, 100%, 0.5), 634px 181px hsla(0, 0%, 100%, 0.5), 812px 1259px hsla(0, 0%, 100%, 0.5), 404px 798px hsla(0, 0%, 100%, 0.5), 1035px 528px hsla(0, 0%, 100%, 0.5), 1948px 603px hsla(0, 0%, 100%, 0.5), 144px 1881px hsla(0, 0%, 100%, 0.5), 700px 1754px hsla(0, 0%, 100%, 0.5), 612px 710px hsla(0, 0%, 100%, 0.5), 1133px 94px hsla(0, 0%, 100%, 0.5), 574px 1419px hsla(0, 0%, 100%, 0.5), 614px 956px hsla(0, 0%, 100%, 0.5), 562px 447px hsla(0, 0%, 100%, 0.5), 977px 459px hsla(0, 0%, 100%, 0.5), 651px 1732px hsla(0, 0%, 100%, 0.5), 1656px 294px hsla(0, 0%, 100%, 0.5), 273px 1239px hsla(0, 0%, 100%, 0.5), 1322px 874px hsla(0, 0%, 100%, 0.5), 611px 949px hsla(0, 0%, 100%, 0.5), 511px 588px hsla(0, 0%, 100%, 0.5), 1125px 280px hsla(0, 0%, 100%, 0.5), 919px 745px hsla(0, 0%, 100%, 0.5), 1076px 654px hsla(0, 0%, 100%, 0.5), 1721px 1602px hsla(0, 0%, 100%, 0.5), 24px 1941px hsla(0, 0%, 100%, 0.5), 1084px 637px hsla(0, 0%, 100%, 0.5), 67px 1618px hsla(0, 0%, 100%, 0.5), 1675px 1947px hsla(0, 0%, 100%, 0.5), 144px 374px hsla(0, 0%, 100%, 0.5), 1071px 893px hsla(0, 0%, 100%, 0.5), 621px 287px hsla(0, 0%, 100%, 0.5), 1936px 1969px hsla(0, 0%, 100%, 0.5), 751px 803px hsla(0, 0%, 100%, 0.5), 1532px 43px hsla(0, 0%, 100%, 0.5), 1916px 1180px hsla(0, 0%, 100%, 0.5), 787px 1350px hsla(0, 0%, 100%, 0.5), 552px 695px hsla(0, 0%, 100%, 0.5), 994px 508px hsla(0, 0%, 100%, 0.5), 794px 1998px hsla(0, 0%, 100%, 0.5), 1417px 1888px hsla(0, 0%, 100%, 0.5), 578px 1428px hsla(0, 0%, 100%, 0.5), 1186px 316px hsla(0, 0%, 100%, 0.5), 494px 973px hsla(0, 0%, 100%, 0.5), 1842px 383px hsla(0, 0%, 100%, 0.5), 1888px 537px hsla(0, 0%, 100%, 0.5), 1722px 1681px hsla(0, 0%, 100%, 0.5), 746px 96px hsla(0, 0%, 100%, 0.5), 1889px 1320px hsla(0, 0%, 100%, 0.5), 849px 806px hsla(0, 0%, 100%, 0.5), 1650px 1015px hsla(0, 0%, 100%, 0.5), 1086px 1462px hsla(0, 0%, 100%, 0.5), 803px 965px hsla(0, 0%, 100%, 0.5), 1565px 1031px hsla(0, 0%, 100%, 0.5), 1715px 1653px hsla(0, 0%, 100%, 0.5), 1251px 49px hsla(0, 0%, 100%, 0.5), 1425px 1237px hsla(0, 0%, 100%, 0.5), 891px 31px hsla(0, 0%, 100%, 0.5), 369px 247px hsla(0, 0%, 100%, 0.5), 1407px 1032px hsla(0, 0%, 100%, 0.5), 219px 266px hsla(0, 0%, 100%, 0.5), 825px 1395px hsla(0, 0%, 100%, 0.5), 1656px 1586px hsla(0, 0%, 100%, 0.5), 650px 1979px hsla(0, 0%, 100%, 0.5), 1162px 725px hsla(0, 0%, 100%, 0.5), 1466px 1044px hsla(0, 0%, 100%, 0.5), 1523px 189px hsla(0, 0%, 100%, 0.5), 1381px 775px hsla(0, 0%, 100%, 0.5), 956px 1300px hsla(0, 0%, 100%, 0.5), 1895px 1846px hsla(0, 0%, 100%, 0.5), 1296px 1492px hsla(0, 0%, 100%, 0.5), 1502px 1291px hsla(0, 0%, 100%, 0.5), 1696px 650px hsla(0, 0%, 100%, 0.5), 232px 240px hsla(0, 0%, 100%, 0.5), 1635px 614px hsla(0, 0%, 100%, 0.5), 582px 300px hsla(0, 0%, 100%, 0.5), 1684px 1032px hsla(0, 0%, 100%, 0.5), 829px 358px hsla(0, 0%, 100%, 0.5), 727px 1432px hsla(0, 0%, 100%, 0.5), 580px 325px hsla(0, 0%, 100%, 0.5), 1801px 1050px hsla(0, 0%, 100%, 0.5), 1288px 766px hsla(0, 0%, 100%, 0.5), 339px 953px hsla(0, 0%, 100%, 0.5), 230px 1162px hsla(0, 0%, 100%, 0.5), 563px 1447px hsla(0, 0%, 100%, 0.5), 1501px 504px hsla(0, 0%, 100%, 0.5), 211px 642px hsla(0, 0%, 100%, 0.5), 260px 1073px hsla(0, 0%, 100%, 0.5), 638px 1062px hsla(0, 0%, 100%, 0.5), 230px 573px hsla(0, 0%, 100%, 0.5), 1154px 873px hsla(0, 0%, 100%, 0.5), 1717px 1181px hsla(0, 0%, 100%, 0.5), 819px 1052px hsla(0, 0%, 100%, 0.5), 496px 1761px hsla(0, 0%, 100%, 0.5), 705px 62px hsla(0, 0%, 100%, 0.5), 870px 592px hsla(0, 0%, 100%, 0.5), 1167px 1072px hsla(0, 0%, 100%, 0.5), 1367px 632px hsla(0, 0%, 100%, 0.5), 65px 1284px hsla(0, 0%, 100%, 0.5), 915px 1214px hsla(0, 0%, 100%, 0.5), 515px 881px hsla(0, 0%, 100%, 0.5), 808px 101px hsla(0, 0%, 100%, 0.5), 597px 601px hsla(0, 0%, 100%, 0.5),
    10px 813px hsla(0, 0%, 100%, 0.5), 104px 362px hsla(0, 0%, 100%, 0.5), 851px 1039px hsla(0, 0%, 100%, 0.5), 909px 1966px hsla(0, 0%, 100%, 0.5), 346px 1727px hsla(0, 0%, 100%, 0.5), 6px 699px hsla(0, 0%, 100%, 0.5), 602px 1457px hsla(0, 0%, 100%, 0.5), 1810px 1364px hsla(0, 0%, 100%, 0.5), 956px 211px hsla(0, 0%, 100%, 0.5), 409px 368px hsla(0, 0%, 100%, 0.5), 290px 350px hsla(0, 0%, 100%, 0.5), 1984px 1482px hsla(0, 0%, 100%, 0.5), 928px 924px hsla(0, 0%, 100%, 0.5), 21px 1201px hsla(0, 0%, 100%, 0.5), 853px 1136px hsla(0, 0%, 100%, 0.5), 1274px 1784px hsla(0, 0%, 100%, 0.5), 1384px 183px hsla(0, 0%, 100%, 0.5), 1614px 1553px hsla(0, 0%, 100%, 0.5), 1401px 895px hsla(0, 0%, 100%, 0.5), 788px 466px hsla(0, 0%, 100%, 0.5), 1956px 1392px hsla(0, 0%, 100%, 0.5), 1295px 1431px hsla(0, 0%, 100%, 0.5), 1732px 1902px hsla(0, 0%, 100%, 0.5), 1481px 772px hsla(0, 0%, 100%, 0.5), 564px 660px hsla(0, 0%, 100%, 0.5), 1697px 913px hsla(0, 0%, 100%, 0.5), 1599px 1607px hsla(0, 0%, 100%, 0.5), 1135px 1260px hsla(0, 0%, 100%, 0.5), 1420px 1460px hsla(0, 0%, 100%, 0.5), 467px 1303px hsla(0, 0%, 100%, 0.5), 629px 1649px hsla(0, 0%, 100%, 0.5), 1409px 198px hsla(0, 0%, 100%, 0.5), 1528px 223px hsla(0, 0%, 100%, 0.5), 1398px 1971px hsla(0, 0%, 100%, 0.5), 1475px 70px hsla(0, 0%, 100%, 0.5), 26px 701px hsla(0, 0%, 100%, 0.5), 1864px 1875px hsla(0, 0%, 100%, 0.5), 114px 709px hsla(0, 0%, 100%, 0.5), 1784px 1801px hsla(0, 0%, 100%, 0.5), 1080px 1979px hsla(0, 0%, 100%, 0.5), 550px 1131px hsla(0, 0%, 100%, 0.5), 1537px 1835px hsla(0, 0%, 100%, 0.5), 1157px 1022px hsla(0, 0%, 100%, 0.5), 435px 1030px hsla(0, 0%, 100%, 0.5), 1020px 1295px hsla(0, 0%, 100%, 0.5), 1245px 1795px hsla(0, 0%, 100%, 0.5), 856px 1942px hsla(0, 0%, 100%, 0.5), 1689px 367px hsla(0, 0%, 100%, 0.5), 1960px 820px hsla(0, 0%, 100%, 0.5), 502px 791px hsla(0, 0%, 100%, 0.5), 844px 793px hsla(0, 0%, 100%, 0.5), 451px 1341px hsla(0, 0%, 100%, 0.5), 548px 688px hsla(0, 0%, 100%, 0.5), 742px 81px hsla(0, 0%, 100%, 0.5), 1110px 939px hsla(0, 0%, 100%, 0.5), 773px 206px hsla(0, 0%, 100%, 0.5), 931px 1958px hsla(0, 0%, 100%, 0.5), 1086px 1506px hsla(0, 0%, 100%, 0.5), 533px 655px hsla(0, 0%, 100%, 0.5), 1753px 1889px hsla(0, 0%, 100%, 0.5), 785px 848px hsla(0, 0%, 100%, 0.5), 1725px 1452px hsla(0, 0%, 100%, 0.5), 352px 889px hsla(0, 0%, 100%, 0.5), 420px 1995px hsla(0, 0%, 100%, 0.5), 1237px 997px hsla(0, 0%, 100%, 0.5), 353px 690px hsla(0, 0%, 100%, 0.5), 763px 267px hsla(0, 0%, 100%, 0.5), 874px 1436px hsla(0, 0%, 100%, 0.5), 1622px 1896px hsla(0, 0%, 100%, 0.5), 1288px 1495px hsla(0, 0%, 100%, 0.5), 1049px 1818px hsla(0, 0%, 100%, 0.5), 147px 1870px hsla(0, 0%, 100%, 0.5), 644px 1695px hsla(0, 0%, 100%, 0.5), 130px 305px hsla(0, 0%, 100%, 0.5), 820px 63px hsla(0, 0%, 100%, 0.5), 1256px 1868px hsla(0, 0%, 100%, 0.5), 1135px 1549px hsla(0, 0%, 100%, 0.5), 596px 1585px hsla(0, 0%, 100%, 0.5), 1682px 156px hsla(0, 0%, 100%, 0.5), 631px 430px hsla(0, 0%, 100%, 0.5), 1964px 966px hsla(0, 0%, 100%, 0.5), 1758px 1209px hsla(0, 0%, 100%, 0.5), 434px 1269px hsla(0, 0%, 100%, 0.5), 1251px 455px hsla(0, 0%, 100%, 0.5), 1300px 273px hsla(0, 0%, 100%, 0.5), 1354px 621px hsla(0, 0%, 100%, 0.5), 446px 1456px hsla(0, 0%, 100%, 0.5), 1526px 326px hsla(0, 0%, 100%, 0.5), 616px 1498px hsla(0, 0%, 100%, 0.5), 1934px 967px hsla(0, 0%, 100%, 0.5), 1399px 903px hsla(0, 0%, 100%, 0.5), 531px 483px hsla(0, 0%, 100%, 0.5), 1833px 985px hsla(0, 0%, 100%, 0.5), 161px 1377px hsla(0, 0%, 100%, 0.5), 1794px 1128px hsla(0, 0%, 100%, 0.5), 1367px 650px hsla(0, 0%, 100%, 0.5), 725px 571px hsla(0, 0%, 100%, 0.5), 1193px 845px hsla(0, 0%, 100%, 0.5), 1909px 463px hsla(0, 0%, 100%, 0.5), 530px 1669px hsla(0, 0%, 100%, 0.5), 1393px 572px hsla(0, 0%, 100%, 0.5), 914px 150px hsla(0, 0%, 100%, 0.5), 1686px 1543px hsla(0, 0%, 100%, 0.5), 939px 13px hsla(0, 0%, 100%, 0.5), 247px 1702px hsla(0, 0%, 100%, 0.5), 625px 1093px hsla(0, 0%, 100%, 0.5), 1504px 1378px hsla(0, 0%, 100%, 0.5), 749px 13px hsla(0, 0%, 100%, 0.5), 1978px 757px hsla(0, 0%, 100%, 0.5), 1714px 1263px hsla(0, 0%, 100%, 0.5), 512px 153px hsla(0, 0%, 100%, 0.5), 1442px 241px hsla(0, 0%, 100%, 0.5), 960px 1330px hsla(0, 0%, 100%, 0.5), 1540px 94px hsla(0, 0%, 100%, 0.5), 151px 1214px hsla(0, 0%, 100%, 0.5), 700px 201px hsla(0, 0%, 100%, 0.5), 545px 1511px hsla(0, 0%, 100%, 0.5), 965px 639px hsla(0, 0%, 100%, 0.5), 75px 762px hsla(0, 0%, 100%, 0.5), 1489px 1591px hsla(0, 0%, 100%, 0.5), 901px 1949px hsla(0, 0%, 100%, 0.5), 556px 651px hsla(0, 0%, 100%, 0.5), 836px 1584px hsla(0, 0%, 100%, 0.5), 1695px 1179px hsla(0, 0%, 100%, 0.5), 938px 544px hsla(0, 0%, 100%, 0.5), 1528px 245px hsla(0, 0%, 100%, 0.5), 508px 281px hsla(0, 0%, 100%, 0.5), 672px 1038px hsla(0, 0%, 100%, 0.5), 321px 834px hsla(0, 0%, 100%, 0.5), 1917px 622px hsla(0, 0%, 100%, 0.5), 57px 984px hsla(0, 0%, 100%, 0.5), 471px 1961px hsla(0, 0%, 100%, 0.5), 1708px 1150px hsla(0, 0%, 100%, 0.5), 148px 391px hsla(0, 0%, 100%, 0.5), 1625px 1383px hsla(0, 0%, 100%, 0.5), 1873px 1047px hsla(0, 0%, 100%, 0.5), 1198px 1157px hsla(0, 0%, 100%, 0.5), 1299px 781px hsla(0, 0%, 100%, 0.5), 1043px 409px hsla(0, 0%, 100%, 0.5), 531px 1640px hsla(0, 0%, 100%, 0.5), 693px 839px hsla(0, 0%, 100%, 0.5), 151px 811px hsla(0, 0%, 100%, 0.5), 1901px 1701px hsla(0, 0%, 100%, 0.5), 648px 1620px hsla(0, 0%, 100%, 0.5), 667px 1575px hsla(0, 0%, 100%, 0.5), 1372px 155px hsla(0, 0%, 100%, 0.5), 1475px 931px hsla(0, 0%, 100%, 0.5), 1364px 1901px hsla(0, 0%, 100%, 0.5), 330px 1521px hsla(0, 0%, 100%, 0.5), 1060px 139px hsla(0, 0%, 100%, 0.5), 1815px 1772px hsla(0, 0%, 100%, 0.5), 1574px 1255px hsla(0, 0%, 100%, 0.5), 1458px 829px hsla(0, 0%, 100%, 0.5), 766px 1554px hsla(0, 0%, 100%, 0.5), 579px 1570px hsla(0, 0%, 100%, 0.5), 1756px 456px hsla(0, 0%, 100%, 0.5), 958px 1397px hsla(0, 0%, 100%, 0.5), 1573px 422px hsla(0, 0%, 100%, 0.5), 1105px 1203px hsla(0, 0%, 100%, 0.5), 1140px 1114px hsla(0, 0%, 100%, 0.5), 1141px 38px hsla(0, 0%, 100%, 0.5), 616px 1012px hsla(0, 0%, 100%, 0.5), 1532px 1648px hsla(0, 0%, 100%, 0.5), 1073px 299px hsla(0, 0%, 100%, 0.5), 1383px 770px hsla(0, 0%, 100%, 0.5), 81px 1693px hsla(0, 0%, 100%, 0.5), 1365px 977px hsla(0, 0%, 100%, 0.5), 356px 1484px hsla(0, 0%, 100%, 0.5), 1332px 1808px hsla(0, 0%, 100%, 0.5), 1632px 1539px hsla(0, 0%, 100%, 0.5), 1344px 889px hsla(0, 0%, 100%, 0.5), 1530px 834px hsla(0, 0%, 100%, 0.5), 1962px 1174px hsla(0, 0%, 100%, 0.5), 1517px 282px hsla(0, 0%, 100%, 0.5), 792px 992px hsla(0, 0%, 100%, 0.5), 1830px 877px hsla(0, 0%, 100%, 0.5), 1962px 556px hsla(0, 0%, 100%, 0.5), 314px 1231px hsla(0, 0%, 100%, 0.5), 1893px 729px hsla(0, 0%, 100%, 0.5), 130px 1984px hsla(0, 0%, 100%, 0.5), 1557px 1671px hsla(0, 0%, 100%, 0.5), 1872px 734px hsla(0, 0%, 100%, 0.5), 484px 1466px hsla(0, 0%, 100%, 0.5), 737px 694px hsla(0, 0%, 100%, 0.5), 786px 1840px hsla(0, 0%, 100%, 0.5), 1886px 1504px hsla(0, 0%, 100%, 0.5), 1150px 638px hsla(0, 0%, 100%, 0.5), 390px 457px hsla(0, 0%, 100%, 0.5), 1459px 594px hsla(0, 0%, 100%, 0.5), 1729px 1594px hsla(0, 0%, 100%, 0.5), 1784px 1737px hsla(0, 0%, 100%, 0.5), 671px 1719px hsla(0, 0%, 100%, 0.5), 793px 11px hsla(0, 0%, 100%, 0.5), 1267px 259px hsla(0, 0%, 100%, 0.5), 212px 1212px hsla(0, 0%, 100%, 0.5), 209px 221px hsla(0, 0%, 100%, 0.5), 1007px 1915px hsla(0, 0%, 100%, 0.5), 1218px 1895px hsla(0, 0%, 100%, 0.5), 488px 1722px hsla(0, 0%, 100%, 0.5), 254px 167px hsla(0, 0%, 100%, 0.5), 1705px 727px hsla(0, 0%, 100%, 0.5), 1651px 702px hsla(0, 0%, 100%, 0.5), 1408px 266px hsla(0, 0%, 100%, 0.5), 1331px 1436px hsla(0, 0%, 100%, 0.5), 300px 793px hsla(0, 0%, 100%, 0.5), 1912px 1285px hsla(0, 0%, 100%, 0.5), 1945px 1073px hsla(0, 0%, 100%, 0.5), 412px 1829px hsla(0, 0%, 100%, 0.5), 843px 173px hsla(0, 0%, 100%, 0.5), 1260px 1573px hsla(0, 0%, 100%, 0.5), 1925px 368px hsla(0, 0%, 100%, 0.5), 1885px 178px hsla(0, 0%, 100%, 0.5), 1128px 1176px hsla(0, 0%, 100%, 0.5), 508px 1152px hsla(0, 0%, 100%, 0.5), 1666px 555px hsla(0, 0%, 100%, 0.5), 1999px 1762px hsla(0, 0%, 100%, 0.5), 1289px 488px hsla(0, 0%, 100%, 0.5), 1704px 763px hsla(0, 0%, 100%, 0.5), 1181px 472px hsla(0, 0%, 100%, 0.5), 1874px 407px hsla(0, 0%, 100%, 0.5), 1654px 1839px hsla(0, 0%, 100%, 0.5), 351px 1524px hsla(0, 0%, 100%, 0.5), 645px 860px hsla(0, 0%, 100%, 0.5), 632px 349px hsla(0, 0%, 100%, 0.5), 1365px 1410px hsla(0, 0%, 100%, 0.5), 1065px 1427px hsla(0, 0%, 100%, 0.5), 1194px 156px hsla(0, 0%, 100%, 0.5), 562px 570px hsla(0, 0%, 100%, 0.5), 246px 1219px hsla(0, 0%, 100%, 0.5), 152px 1774px hsla(0, 0%, 100%, 0.5), 746px 1856px hsla(0, 0%, 100%, 0.5), 125px 1645px hsla(0, 0%, 100%, 0.5), 262px 972px hsla(0, 0%, 100%, 0.5), 138px 10px hsla(0, 0%, 100%, 0.5), 1011px 62px hsla(0, 0%, 100%, 0.5), 960px 804px hsla(0, 0%, 100%, 0.5), 1677px 435px hsla(0, 0%, 100%, 0.5), 701px 146px hsla(0, 0%, 100%, 0.5), 364px 1841px hsla(0, 0%, 100%, 0.5), 1630px 1830px hsla(0, 0%, 100%, 0.5), 1475px 668px hsla(0, 0%, 100%, 0.5), 204px 1747px hsla(0, 0%, 100%, 0.5), 455px 641px hsla(0, 0%, 100%, 0.5), 544px 893px hsla(0, 0%, 100%, 0.5), 422px 878px hsla(0, 0%, 100%, 0.5), 1324px 1848px hsla(0, 0%, 100%, 0.5), 440px 1044px hsla(0, 0%, 100%, 0.5), 1068px 1141px hsla(0, 0%, 100%, 0.5), 1051px 267px hsla(0, 0%, 100%, 0.5), 1822px 1810px hsla(0, 0%, 100%, 0.5), 807px 1199px hsla(0, 0%, 100%, 0.5), 660px 395px hsla(0, 0%, 100%, 0.5), 83px 446px hsla(0, 0%, 100%, 0.5), 1755px 203px hsla(0, 0%, 100%, 0.5), 625px 1657px hsla(0, 0%, 100%, 0.5), 990px 1684px hsla(0, 0%, 100%, 0.5), 1815px 6px hsla(0, 0%, 100%, 0.5), 1682px 1439px hsla(0, 0%, 100%, 0.5), 1925px 359px hsla(0, 0%, 100%, 0.5), 291px 1540px hsla(0, 0%, 100%, 0.5), 1880px 1305px hsla(0, 0%, 100%, 0.5), 1871px 781px hsla(0, 0%, 100%, 0.5), 1179px 1087px hsla(0, 0%, 100%, 0.5), 1197px 666px hsla(0, 0%, 100%, 0.5), 1584px 1385px hsla(0, 0%, 100%, 0.5), 1099px 1212px hsla(0, 0%, 100%, 0.5), 1731px 455px hsla(0, 0%, 100%, 0.5), 1697px 860px hsla(0, 0%, 100%, 0.5), 1921px 1671px hsla(0, 0%, 100%, 0.5), 1772px 386px hsla(0, 0%, 100%, 0.5),
    1565px 1081px hsla(0, 0%, 100%, 0.5), 1254px 1381px hsla(0, 0%, 100%, 0.5), 1701px 394px hsla(0, 0%, 100%, 0.5), 1692px 868px hsla(0, 0%, 100%, 0.5), 1517px 1232px hsla(0, 0%, 100%, 0.5), 710px 1369px hsla(0, 0%, 100%, 0.5), 1484px 1493px hsla(0, 0%, 100%, 0.5), 363px 1730px hsla(0, 0%, 100%, 0.5), 185px 586px hsla(0, 0%, 100%, 0.5), 415px 1873px hsla(0, 0%, 100%, 0.5), 1289px 28px hsla(0, 0%, 100%, 0.5), 866px 665px hsla(0, 0%, 100%, 0.5), 1799px 262px hsla(0, 0%, 100%, 0.5), 973px 1239px hsla(0, 0%, 100%, 0.5), 1558px 1628px hsla(0, 0%, 100%, 0.5), 697px 1408px hsla(0, 0%, 100%, 0.5), 203px 1329px hsla(0, 0%, 100%, 0.5), 744px 1135px hsla(0, 0%, 100%, 0.5), 1035px 1871px hsla(0, 0%, 100%, 0.5), 1298px 259px hsla(0, 0%, 100%, 0.5), 1712px 1152px hsla(0, 0%, 100%, 0.5), 1002px 51px hsla(0, 0%, 100%, 0.5), 1576px 536px hsla(0, 0%, 100%, 0.5), 1124px 252px hsla(0, 0%, 100%, 0.5), 778px 1536px hsla(0, 0%, 100%, 0.5), 1782px 644px hsla(0, 0%, 100%, 0.5), 1138px 59px hsla(0, 0%, 100%, 0.5), 458px 368px hsla(0, 0%, 100%, 0.5), 1772px 1907px hsla(0, 0%, 100%, 0.5), 169px 1128px hsla(0, 0%, 100%, 0.5), 1477px 321px hsla(0, 0%, 100%, 0.5), 1296px 1798px hsla(0, 0%, 100%, 0.5), 684px 99px hsla(0, 0%, 100%, 0.5), 1338px 905px hsla(0, 0%, 100%, 0.5), 13px 999px hsla(0, 0%, 100%, 0.5), 223px 1656px hsla(0, 0%, 100%, 0.5), 1367px 278px hsla(0, 0%, 100%, 0.5), 1792px 346px hsla(0, 0%, 100%, 0.5), 1781px 915px hsla(0, 0%, 100%, 0.5), 307px 1384px hsla(0, 0%, 100%, 0.5), 974px 1394px hsla(0, 0%, 100%, 0.5), 1973px 1483px hsla(0, 0%, 100%, 0.5), 911px 475px hsla(0, 0%, 100%, 0.5), 262px 412px hsla(0, 0%, 100%, 0.5), 407px 323px hsla(0, 0%, 100%, 0.5), 1344px 582px hsla(0, 0%, 100%, 0.5), 105px 399px hsla(0, 0%, 100%, 0.5), 127px 1822px hsla(0, 0%, 100%, 0.5), 160px 752px hsla(0, 0%, 100%, 0.5), 334px 1858px hsla(0, 0%, 100%, 0.5), 1108px 1859px hsla(0, 0%, 100%, 0.5), 981px 1026px hsla(0, 0%, 100%, 0.5), 1533px 127px hsla(0, 0%, 100%, 0.5), 797px 1405px hsla(0, 0%, 100%, 0.5), 408px 950px hsla(0, 0%, 100%, 0.5), 784px 154px hsla(0, 0%, 100%, 0.5), 629px 1085px hsla(0, 0%, 100%, 0.5), 1840px 1133px hsla(0, 0%, 100%, 0.5), 280px 491px hsla(0, 0%, 100%, 0.5), 1755px 559px hsla(0, 0%, 100%, 0.5), 1167px 1384px hsla(0, 0%, 100%, 0.5), 1037px 610px hsla(0, 0%, 100%, 0.5), 1661px 1185px hsla(0, 0%, 100%, 0.5), 304px 26px hsla(0, 0%, 100%, 0.5), 1486px 1228px hsla(0, 0%, 100%, 0.5), 80px 1064px hsla(0, 0%, 100%, 0.5), 6px 151px hsla(0, 0%, 100%, 0.5), 504px 312px hsla(0, 0%, 100%, 0.5), 220px 929px hsla(0, 0%, 100%, 0.5), 88px 1418px hsla(0, 0%, 100%, 0.5), 502px 1192px hsla(0, 0%, 100%, 0.5), 617px 161px hsla(0, 0%, 100%, 0.5), 1975px 827px hsla(0, 0%, 100%, 0.5), 858px 1394px hsla(0, 0%, 100%, 0.5), 388px 1027px hsla(0, 0%, 100%, 0.5), 1606px 1229px hsla(0, 0%, 100%, 0.5), 1849px 621px hsla(0, 0%, 100%, 0.5), 660px 1112px hsla(0, 0%, 100%, 0.5), 1157px 1525px hsla(0, 0%, 100%, 0.5), 1053px 589px hsla(0, 0%, 100%, 0.5), 1307px 1934px hsla(0, 0%, 100%, 0.5), 479px 1357px hsla(0, 0%, 100%, 0.5), 956px 1292px hsla(0, 0%, 100%, 0.5), 29px 114px hsla(0, 0%, 100%, 0.5), 1859px 946px hsla(0, 0%, 100%, 0.5), 784px 312px hsla(0, 0%, 100%, 0.5), 222px 1px hsla(0, 0%, 100%, 0.5), 647px 1958px hsla(0, 0%, 100%, 0.5), 1637px 1451px hsla(0, 0%, 100%, 0.5), 737px 769px hsla(0, 0%, 100%, 0.5), 1155px 1732px hsla(0, 0%, 100%, 0.5), 855px 1557px hsla(0, 0%, 100%, 0.5), 1467px 1287px hsla(0, 0%, 100%, 0.5), 905px 1473px hsla(0, 0%, 100%, 0.5), 70px 916px hsla(0, 0%, 100%, 0.5), 1248px 1796px hsla(0, 0%, 100%, 0.5), 840px 589px hsla(0, 0%, 100%, 0.5), 1983px 1997px hsla(0, 0%, 100%, 0.5), 1910px 1444px hsla(0, 0%, 100%, 0.5), 106px 768px hsla(0, 0%, 100%, 0.5), 1641px 828px hsla(0, 0%, 100%, 0.5), 443px 1083px hsla(0, 0%, 100%, 0.5), 882px 1406px hsla(0, 0%, 100%, 0.5), 883px 344px hsla(0, 0%, 100%, 0.5), 1936px 854px hsla(0, 0%, 100%, 0.5), 653px 1291px hsla(0, 0%, 100%, 0.5), 1990px 1605px hsla(0, 0%, 100%, 0.5), 1872px 631px hsla(0, 0%, 100%, 0.5), 1359px 557px hsla(0, 0%, 100%, 0.5), 1461px 879px hsla(0, 0%, 100%, 0.5), 1151px 1147px hsla(0, 0%, 100%, 0.5), 1674px 1159px hsla(0, 0%, 100%, 0.5), 1822px 1349px hsla(0, 0%, 100%, 0.5), 1603px 1628px hsla(0, 0%, 100%, 0.5), 1845px 972px hsla(0, 0%, 100%, 0.5), 44px 1510px hsla(0, 0%, 100%, 0.5), 1493px 814px hsla(0, 0%, 100%, 0.5), 1926px 505px hsla(0, 0%, 100%, 0.5), 426px 771px hsla(0, 0%, 100%, 0.5), 1084px 920px hsla(0, 0%, 100%, 0.5), 1668px 1833px hsla(0, 0%, 100%, 0.5), 796px 526px hsla(0, 0%, 100%, 0.5), 42px 417px hsla(0, 0%, 100%, 0.5), 1549px 1020px hsla(0, 0%, 100%, 0.5), 1403px 833px hsla(0, 0%, 100%, 0.5), 350px 1723px hsla(0, 0%, 100%, 0.5), 908px 1132px hsla(0, 0%, 100%, 0.5), 615px 20px hsla(0, 0%, 100%, 0.5), 1241px 573px hsla(0, 0%, 100%, 0.5), 686px 1600px hsla(0, 0%, 100%, 0.5), 251px 21px hsla(0, 0%, 100%, 0.5), 736px 1648px hsla(0, 0%, 100%, 0.5), 65px 42px hsla(0, 0%, 100%, 0.5), 1016px 1892px hsla(0, 0%, 100%, 0.5), 314px 760px hsla(0, 0%, 100%, 0.5), 181px 1891px hsla(0, 0%, 100%, 0.5), 949px 473px hsla(0, 0%, 100%, 0.5), 760px 1873px hsla(0, 0%, 100%, 0.5), 439px 371px hsla(0, 0%, 100%, 0.5), 1261px 1488px hsla(0, 0%, 100%, 0.5), 146px 1605px hsla(0, 0%, 100%, 0.5), 634px 289px hsla(0, 0%, 100%, 0.5), 1645px 819px hsla(0, 0%, 100%, 0.5), 1588px 1014px hsla(0, 0%, 100%, 0.5), 1987px 418px hsla(0, 0%, 100%, 0.5), 543px 404px hsla(0, 0%, 100%, 0.5), 1988px 227px hsla(0, 0%, 100%, 0.5), 1249px 413px hsla(0, 0%, 100%, 0.5), 1313px 261px hsla(0, 0%, 100%, 0.5), 1805px 1287px hsla(0, 0%, 100%, 0.5), 1765px 1173px hsla(0, 0%, 100%, 0.5), 1214px 1445px hsla(0, 0%, 100%, 0.5), 1364px 512px hsla(0, 0%, 100%, 0.5), 257px 1337px hsla(0, 0%, 100%, 0.5), 1220px 301px hsla(0, 0%, 100%, 0.5), 1164px 1767px hsla(0, 0%, 100%, 0.5), 1526px 358px hsla(0, 0%, 100%, 0.5), 1756px 1216px hsla(0, 0%, 100%, 0.5), 975px 1068px hsla(0, 0%, 100%, 0.5)`
  };

  const star2 = {
    height: '2px',
    width: '2px',
    position: 'fixed',
    inset: '0',
    boxShadow: `358px 517px hsla(0, 0%, 100%, 0.7), 846px 1546px hsla(0, 0%, 100%, 0.5), 469px 727px hsla(0, 0%, 100%, 0.5), 1613px 1958px hsla(0, 0%, 100%, 0.5), 1310px 1174px hsla(0, 0%, 100%, 0.5), 664px 1812px hsla(0, 0%, 100%, 0.5), 1343px 1606px hsla(0, 0%, 100%, 0.5), 1456px 55px hsla(0, 0%, 100%, 0.5), 499px 27px hsla(0, 0%, 100%, 0.5), 337px 1708px hsla(0, 0%, 100%, 0.5), 978px 1500px hsla(0, 0%, 100%, 0.5), 800px 486px hsla(0, 0%, 100%, 0.5), 837px 1447px hsla(0, 0%, 100%, 0.5), 1608px 182px hsla(0, 0%, 100%, 0.5), 194px 1397px hsla(0, 0%, 100%, 0.5), 2px 1777px hsla(0, 0%, 100%, 0.5), 1753px 369px hsla(0, 0%, 100%, 0.5), 443px 1674px hsla(0, 0%, 100%, 0.5), 998px 114px hsla(0, 0%, 100%, 0.5), 1895px 673px hsla(0, 0%, 100%, 0.5), 1108px 1059px hsla(0, 0%, 100%, 0.5), 1787px 1389px hsla(0, 0%, 100%, 0.5), 951px 1772px hsla(0, 0%, 100%, 0.5), 323px 931px hsla(0, 0%, 100%, 0.5), 1908px 675px hsla(0, 0%, 100%, 0.5), 885px 918px hsla(0, 0%, 100%, 0.5), 365px 909px hsla(0, 0%, 100%, 0.5), 1897px 574px hsla(0, 0%, 100%, 0.5), 193px 915px hsla(0, 0%, 100%, 0.5), 110px 81px hsla(0, 0%, 100%, 0.5), 352px 181px hsla(0, 0%, 100%, 0.5), 1407px 420px hsla(0, 0%, 100%, 0.5), 901px 140px hsla(0, 0%, 100%, 0.5), 654px 258px hsla(0, 0%, 100%, 0.5), 414px 265px hsla(0, 0%, 100%, 0.5), 1626px 508px hsla(0, 0%, 100%, 0.5), 732px 220px hsla(0, 0%, 100%, 0.5), 1136px 1517px hsla(0, 0%, 100%, 0.5), 1642px 638px hsla(0, 0%, 100%, 0.5), 1576px 1041px hsla(0, 0%, 100%, 0.5), 1175px 1180px hsla(0, 0%, 100%, 0.5), 886px 1020px hsla(0, 0%, 100%, 0.5), 1062px 1284px hsla(0, 0%, 100%, 0.5), 1907px 1715px hsla(0, 0%, 100%, 0.5), 281px 1948px hsla(0, 0%, 100%, 0.5), 1754px 1008px hsla(0, 0%, 100%, 0.5), 882px 332px hsla(0, 0%, 100%, 0.5), 1467px 433px hsla(0, 0%, 100%, 0.5), 1212px 1577px hsla(0, 0%, 100%, 0.5), 1398px 1303px hsla(0, 0%, 100%, 0.5), 1655px 1220px hsla(0, 0%, 100%, 0.5), 427px 254px hsla(0, 0%, 100%, 0.5), 605px 1601px hsla(0, 0%, 100%, 0.5), 630px 1816px hsla(0, 0%, 100%, 0.5), 767px 1952px hsla(0, 0%, 100%, 0.5), 1000px 821px hsla(0, 0%, 100%, 0.5), 632px 1527px hsla(0, 0%, 100%, 0.5), 320px 1522px hsla(0, 0%, 100%, 0.5), 1569px 291px hsla(0, 0%, 100%, 0.5), 170px 625px hsla(0, 0%, 100%, 0.5), 911px 1791px hsla(0, 0%, 100%, 0.5), 1335px 1668px hsla(0, 0%, 100%, 0.5), 233px 1047px hsla(0, 0%, 100%, 0.5), 1720px 1158px hsla(0, 0%, 100%, 0.5), 81px 980px hsla(0, 0%, 100%, 0.5), 1614px 207px hsla(0, 0%, 100%, 0.5), 1778px 1979px hsla(0, 0%, 100%, 0.5), 241px 821px hsla(0, 0%, 100%, 0.5), 1219px 507px hsla(0, 0%, 100%, 0.5), 1875px 894px hsla(0, 0%, 100%, 0.5), 758px 1250px hsla(0, 0%, 100%, 0.5), 1928px 1258px hsla(0, 0%, 100%, 0.5), 1182px 789px hsla(0, 0%, 100%, 0.5), 927px 991px hsla(0, 0%, 100%, 0.5), 1242px 293px hsla(0, 0%, 100%, 0.5), 788px 52px hsla(0, 0%, 100%, 0.5), 960px 1116px hsla(0, 0%, 100%, 0.5), 981px 521px hsla(0, 0%, 100%, 0.5), 1776px 524px hsla(0, 0%, 100%, 0.5), 411px 1835px hsla(0, 0%, 100%, 0.5), 1247px 612px hsla(0, 0%, 100%, 0.5), 550px 1706px hsla(0, 0%, 100%, 0.5), 1268px 1744px hsla(0, 0%, 100%, 0.5), 1317px 410px hsla(0, 0%, 100%, 0.5), 1073px 1063px hsla(0, 0%, 100%, 0.5), 729px 232px hsla(0, 0%, 100%, 0.5), 1691px 1733px hsla(0, 0%, 100%, 0.5), 1940px 1384px hsla(0, 0%, 100%, 0.5), 1344px 665px hsla(0, 0%, 100%, 0.5), 290px 1346px hsla(0, 0%, 100%, 0.5), 1572px 1796px hsla(0, 0%, 100%, 0.5), 1885px 1293px hsla(0, 0%, 100%, 0.5), 30px 622px hsla(0, 0%, 100%, 0.5), 1188px 951px hsla(0, 0%, 100%, 0.5), 252px 1383px hsla(0, 0%, 100%, 0.5), 710px 409px hsla(0, 0%, 100%, 0.5), 27px 1301px hsla(0, 0%, 100%, 0.5), 234px 1292px hsla(0, 0%, 100%, 0.5), 651px 317px hsla(0, 0%, 100%, 0.5), 1626px 173px hsla(0, 0%, 100%, 0.5), 867px 1877px hsla(0, 0%, 100%, 0.5), 1049px 1805px hsla(0, 0%, 100%, 0.5), 886px 968px hsla(0, 0%, 100%, 0.5), 1426px 8px hsla(0, 0%, 100%, 0.5), 198px 316px hsla(0, 0%, 100%, 0.5), 1064px 196px hsla(0, 0%, 100%, 0.5), 463px 235px hsla(0, 0%, 100%, 0.5), 1712px 67px hsla(0, 0%, 100%, 0.5), 380px 1415px hsla(0, 0%, 100%, 0.5), 251px 447px hsla(0, 0%, 100%, 0.5), 448px 910px hsla(0, 0%, 100%, 0.5), 996px 299px hsla(0, 0%, 100%, 0.5), 477px 1353px hsla(0, 0%, 100%, 0.5), 334px 1020px hsla(0, 0%, 100%, 0.5), 1730px 1478px hsla(0, 0%, 100%, 0.5), 914px 1847px hsla(0, 0%, 100%, 0.5), 1758px 1771px hsla(0, 0%, 100%, 0.5), 1023px 432px hsla(0, 0%, 100%, 0.5), 1766px 1027px hsla(0, 0%, 100%, 0.5), 1932px 459px hsla(0, 0%, 100%, 0.5), 521px 1677px hsla(0, 0%, 100%, 0.5), 466px 441px hsla(0, 0%, 100%, 0.5), 510px 134px hsla(0, 0%, 100%, 0.5), 89px 1894px hsla(0, 0%, 100%, 0.5), 1865px 1632px hsla(0, 0%, 100%, 0.5), 1064px 442px hsla(0, 0%, 100%, 0.5), 239px 11px hsla(0, 0%, 100%, 0.5), 1056px 155px hsla(0, 0%, 100%, 0.5), 1203px 367px hsla(0, 0%, 100%, 0.5), 107px 746px hsla(0, 0%, 100%, 0.5), 1508px 1290px hsla(0, 0%, 100%, 0.5), 334px 479px hsla(0, 0%, 100%, 0.5), 1530px 234px hsla(0, 0%, 100%, 0.5), 1088px 1676px hsla(0, 0%, 100%, 0.5), 1923px 1319px hsla(0, 0%, 100%, 0.5), 952px 684px hsla(0, 0%, 100%, 0.5), 1019px 581px hsla(0, 0%, 100%, 0.5), 1864px 1909px hsla(0, 0%, 100%, 0.5), 1694px 408px hsla(0, 0%, 100%, 0.5), 203px 823px hsla(0, 0%, 100%, 0.5), 805px 1990px hsla(0, 0%, 100%, 0.5), 383px 505px hsla(0, 0%, 100%, 0.5), 1797px 926px hsla(0, 0%, 100%, 0.5), 354px 762px hsla(0, 0%, 100%, 0.5), 454px 1256px hsla(0, 0%, 100%, 0.5), 1347px 544px hsla(0, 0%, 100%, 0.5), 1098px 559px hsla(0, 0%, 100%, 0.5), 1769px 84px hsla(0, 0%, 100%, 0.5), 140px 171px hsla(0, 0%, 100%, 0.5), 1300px 1390px hsla(0, 0%, 100%, 0.5), 28px 1019px hsla(0, 0%, 100%, 0.5), 1387px 1924px hsla(0, 0%, 100%, 0.5), 1121px 690px hsla(0, 0%, 100%, 0.5), 211px 1647px hsla(0, 0%, 100%, 0.5), 910px 897px hsla(0, 0%, 100%, 0.5), 1407px 1917px hsla(0, 0%, 100%, 0.5), 481px 823px hsla(0, 0%, 100%, 0.5), 398px 1774px hsla(0, 0%, 100%, 0.5), 1306px 291px hsla(0, 0%, 100%, 0.5), 747px 760px hsla(0, 0%, 100%, 0.5), 6px 1623px hsla(0, 0%, 100%, 0.5), 1347px 1777px hsla(0, 0%, 100%, 0.5), 998px 1853px hsla(0, 0%, 100%, 0.5), 1894px 948px hsla(0, 0%, 100%, 0.5), 1759px 892px hsla(0, 0%, 100%, 0.5), 524px 451px hsla(0, 0%, 100%, 0.5), 1416px 316px hsla(0, 0%, 100%, 0.5), 1922px 959px hsla(0, 0%, 100%, 0.5), 1746px 60px hsla(0, 0%, 100%, 0.5), 780px 303px hsla(0, 0%, 100%, 0.5), 548px 1982px hsla(0, 0%, 100%, 0.5), 1104px 1468px hsla(0, 0%, 100%, 0.5), 1883px 1420px hsla(0, 0%, 100%, 0.5), 1073px 799px hsla(0, 0%, 100%, 0.5), 212px 636px hsla(0, 0%, 100%, 0.5), 768px 1566px hsla(0, 0%, 100%, 0.5), 1572px 941px hsla(0, 0%, 100%, 0.5), 863px 1018px hsla(0, 0%, 100%, 0.5), 447px 421px hsla(0, 0%, 100%, 0.5), 687px 1713px hsla(0, 0%, 100%, 0.5), 724px 1747px hsla(0, 0%, 100%, 0.5), 318px 1128px hsla(0, 0%, 100%, 0.5), 810px 1547px hsla(0, 0%, 100%, 0.5), 878px 1057px hsla(0, 0%, 100%, 0.5), 1726px 1375px hsla(0, 0%, 100%, 0.5), 774px 147px hsla(0, 0%, 100%, 0.5), 1109px 241px hsla(0, 0%, 100%, 0.5), 862px 993px hsla(0, 0%, 100%, 0.5), 1170px 147px hsla(0, 0%, 100%, 0.5), 928px 1677px hsla(0, 0%, 100%, 0.5), 1858px 789px hsla(0, 0%, 100%, 0.5), 688px 435px hsla(0, 0%, 100%, 0.5), 352px 1469px hsla(0, 0%, 100%, 0.5), 603px 1302px hsla(0, 0%, 100%, 0.5), 193px 1114px hsla(0, 0%, 100%, 0.5), 253px 433px hsla(0, 0%, 100%, 0.5), 183px 923px hsla(0, 0%, 100%, 0.5), 349px 40px hsla(0, 0%, 100%, 0.5), 580px 23px hsla(0, 0%, 100%, 0.5), 198px 1579px hsla(0, 0%, 100%, 0.5)`,
    WebkitAnimation: `animStar 250s linear infinite`,
    animation: `animStar 250s linear infinite`
  };

  return (
    <div className="stars-animate stars-animate-sticky-top fixed inset-0 z-0">
      <div style={star}></div>
      <div style={star2}></div>
    </div>
  );
};

export default StarBg;
