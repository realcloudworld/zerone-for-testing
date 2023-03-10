<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ["en_name" => "AFGHANISTAN", "ar_name" => "أفغانستان", "country_code" =>    "AF"],
            ["en_name" => "ALBANIA", "ar_name" => "ألبانيا", "country_code" =>    "AL"],
            ["en_name" => "ALGERIA", "ar_name" => "الجزائر", "country_code" =>    "DZ"],
            ["en_name" => "AMERICAN SAMOA", "ar_name" => "ساموا الأمريكية", "country_code" =>    "AS"],
            ["en_name" => "ANDORRA", "ar_name" => "أندورا", "country_code" =>    "AD"],
            ["en_name" => "ANGOLA", "ar_name" => "أنغولا", "country_code" =>    "AO"],
            ["en_name" => "ANGUILLA", "ar_name" => "أنغيلا", "country_code" =>    "AI"],
            ["en_name" => "ANTARCTICA", "ar_name" => "أنتاركتيكا", "country_code" =>    "AQ"],
            ["en_name" => "ANTIGUA AND BARBUDA", "ar_name" => "أنتيغوا وبربودا", "country_code" =>    "AG"],
            ["en_name" => "ARGENTINA", "ar_name" => "الأرجنتين", "country_code" =>    "AR"],
            ["en_name" => "ARMENIA", "ar_name" => "أرمينيا", "country_code" =>    "AM"],
            ["en_name" => "ARUBA", "ar_name" => "أروبا", "country_code" =>    "AW"],
            ["en_name" => "AUSTRALIA", "ar_name" => "أستراليا", "country_code" =>    "AU"],
            ["en_name" => "AUSTRIA", "ar_name" => "النمسا", "country_code" =>    "AT"],
            ["en_name" => "AZERBAIJAN", "ar_name" => "أذربيجان", "country_code" =>    "AZ"],
            ["en_name" => "BAHAMAS", "ar_name" => "الباهاما", "country_code" =>    "BS"],
            ["en_name" => "BAHRAIN", "ar_name" => "البحرين", "country_code" =>    "BH"],
            ["en_name" => "BANGLADESH", "ar_name" => "بنغلاديش", "country_code" =>    "BD"],
            ["en_name" => "BARBADOS", "ar_name" => "بربادوس", "country_code" =>    "BB"],
            ["en_name" => "BELARUS", "ar_name" => "بيلاروسيا", "country_code" =>    "BY"],
            ["en_name" => "BELGIUM", "ar_name" => "بلجيكا", "country_code" =>    "BE"],
            ["en_name" => "BELIZE", "ar_name" => "بليز", "country_code" =>    "BZ"],
            ["en_name" => "BENIN", "ar_name" => "بنين", "country_code" =>    "BJ"],
            ["en_name" => "BERMUDA", "ar_name" => "برمودا", "country_code" =>    "BM"],
            ["en_name" => "BHUTAN", "ar_name" => "بوتان", "country_code" =>    "BT"],
            ["en_name" => "BOLIVIA, PLURINATIONAL STATE OF", "ar_name" => "بوليفيا ، دولة متعددة القوميات", "country_code" =>    "BO"],
            ["en_name" => "BONAIRE, SINT EUSTATIUS AND SABA", "ar_name" => "بوناير وسينت أوستاتيوس وسابا", "country_code" =>    "BQ"],
            ["en_name" => "BOSNIA AND HERZEGOVINA", "ar_name" => "البوسنة والهرسك", "country_code" =>    "BA"],
            ["en_name" => "BOTSWANA", "ar_name" => "بوتسوانا", "country_code" =>    "BW"],
            ["en_name" => "BRAZIL", "ar_name" => "البرازيل", "country_code" =>    "BR"],
            ["en_name" => "BRITISH INDIAN OCEAN TERRITORY", "ar_name" => "إقليم المحيط البريطاني الهندي", "country_code" =>    "IO"],
            ["en_name" => "BRUNEI DARUSSALAM", "ar_name" => "بروناي دار السلام", "country_code" =>    "BN"],
            ["en_name" => "BULGARIA", "ar_name" => "بلغاريا", "country_code" =>    "BG"],
            ["en_name" => "BURKINA FASO", "ar_name" => "بوركينا فاسو", "country_code" =>    "BF"],
            ["en_name" => "BURUNDI", "ar_name" => "بوروندي", "country_code" =>    "BI"],
            ["en_name" => "CAMBODIA", "ar_name" => "كمبوديا", "country_code" =>    "KH"],
            ["en_name" => "CAMEROON", "ar_name" => "الكاميرون", "country_code" =>    "CM"],
            ["en_name" => "CANADA", "ar_name" => "كندا", "country_code" =>    "CA"],
            ["en_name" => "CAPE VERDE", "ar_name" => "كيب فيردي", "country_code" =>    "CV"],
            ["en_name" => "CAYMAN ISLANDS", "ar_name" => "جزر كايمان", "country_code" =>    "KY"],
            ["en_name" => "CENTRAL AFRICAN REPUBLIC", "ar_name" => "جمهورية افريقيا الوسطى", "country_code" =>    "CF"],
            ["en_name" => "CHAD", "ar_name" => "تشاد", "country_code" =>    "TD"],
            ["en_name" => "CHILE", "ar_name" => "شيلي", "country_code" =>    "CL"],
            ["en_name" => "CHINA", "ar_name" => "الصين", "country_code" =>    "CN"],
            ["en_name" => "CHRISTMAS ISLAND", "ar_name" => "جزيرة الكريسماس", "country_code" =>    "CX"],
            ["en_name" => "COCOS (KEELING) ISLANDS", "ar_name" => "جزر كوكوس (كيلينغ)", "country_code" =>    "CC"],
            ["en_name" => "COLOMBIA", "ar_name" => "كولومبيا", "country_code" =>    "CO"],
            ["en_name" => "COMOROS", "ar_name" => "جزر القمر", "country_code" =>    "KM"],
            ["en_name" => "CONGO", "ar_name" => "الكونغو", "country_code" =>    "CG"],
            ["en_name" => "CONGO, THE DEMOCRATIC REPUBLIC OF THE", "ar_name" => "جمهورية الكونغو الديموقراطية", "country_code" =>    "CD"],
            ["en_name" => "COOK ISLANDS", "ar_name" => "جزر كوك", "country_code" =>    "CK"],
            ["en_name" => "COSTA RICA", "ar_name" => "كوستا ريكا", "country_code" =>    "CR"],
            ["en_name" => "CÔTE D'IVOIRE", "ar_name" => "كوت ديفوار", "country_code" =>    "CI"],
            ["en_name" => "CROATIA", "ar_name" => "كرواتيا", "country_code" =>    "HR"],
            ["en_name" => "CUBA", "ar_name" => "كوبا", "country_code" =>    "CU"],
            ["en_name" => "CURAÇAO", "ar_name" => "كورااو", "country_code" =>    "CW"],
            ["en_name" => "CYPRUS", "ar_name" => "قبرص", "country_code" =>    "CY"],
            ["en_name" => "CZECHIA", "ar_name" => "تشيكيا", "country_code" =>    "CZ"],
            ["en_name" => "DENMARK", "ar_name" => "الدنمارك", "country_code" =>    "DK"],
            ["en_name" => "DJIBOUTI", "ar_name" => "جيبوتي", "country_code" =>    "DJ"],
            ["en_name" => "DOMINICA", "ar_name" => "دومينيكا", "country_code" =>    "DM"],
            ["en_name" => "DOMINICAN REPUBLIC", "ar_name" => "جمهورية الدومنيكان", "country_code" =>    "DO"],
            ["en_name" => "ECUADOR", "ar_name" => "اكوادور", "country_code" =>    "EC"],
            ["en_name" => "EGYPT", "ar_name" => "مصر", "country_code" =>    "EG"],
            ["en_name" => "EL SALVADOR", "ar_name" => "السلفادور", "country_code" =>    "SV"],
            ["en_name" => "EQUATORIAL GUINEA", "ar_name" => "غينيا الإستوائية", "country_code" =>    "GQ"],
            ["en_name" => "ERITREA", "ar_name" => "إريتريا", "country_code" =>    "ER"],
            ["en_name" => "ESTONIA", "ar_name" => "إستونيا", "country_code" =>    "EE"],
            ["en_name" => "ESWATINI", "ar_name" => "اسواتيني", "country_code" =>    "SZ"],
            ["en_name" => "ETHIOPIA", "ar_name" => "أثيوبيا", "country_code" =>    "ET"],
            ["en_name" => "FALKLAND ISLANDS (MALVINAS)", "ar_name" => "جزر فوكلاند (مالفيناس)", "country_code" =>    "FK"],
            ["en_name" => "FAROE ISLANDS", "ar_name" => "جزر فاروس", "country_code" =>    "FO"],
            ["en_name" => "FIJI", "ar_name" => "فيجي", "country_code" =>    "FJ"],
            ["en_name" => "FINLAND", "ar_name" => "فنلندا", "country_code" =>    "FI"],
            ["en_name" => "FRANCE", "ar_name" => "فرنسا", "country_code" =>    "FR"],
            ["en_name" => "FRENCH GUIANA", "ar_name" => "غيانا الفرنسية", "country_code" =>    "GF"],
            ["en_name" => "FRENCH POLYNESIA", "ar_name" => "بولينيزيا الفرنسية", "country_code" =>    "PF"],
            ["en_name" => "FRENCH SOUTHERN TERRITORIES", "ar_name" => "المناطق الجنوبية لفرنسا", "country_code" =>    "TF"],
            ["en_name" => "GABON", "ar_name" => "جابون", "country_code" =>    "GA"],
            ["en_name" => "GAMBIA", "ar_name" => "غامبيا", "country_code" =>    "GM"],
            ["en_name" => "GEORGIA", "ar_name" => "جورجيا", "country_code" =>    "GE"],
            ["en_name" => "GERMANY", "ar_name" => "ألمانيا", "country_code" =>    "DE"],
            ["en_name" => "GHANA", "ar_name" => "غانا", "country_code" =>    "GH"],
            ["en_name" => "GIBRALTAR", "ar_name" => "جبل طارق", "country_code" =>    "GI"],
            ["en_name" => "GREECE", "ar_name" => "اليونان", "country_code" =>    "GR"],
            ["en_name" => "GREENLAND", "ar_name" => "الأرض الخضراء", "country_code" =>    "GL"],
            ["en_name" => "GRENADA", "ar_name" => "غرينادا", "country_code" =>    "GD"],
            ["en_name" => "GUADELOUPE", "ar_name" => "جوادلوب", "country_code" =>    "GP"],
            ["en_name" => "GUAM", "ar_name" => "جوام", "country_code" =>    "GU"],
            ["en_name" => "GUATEMALA", "ar_name" => "جواتيمالا", "country_code" =>    "GT"],
            ["en_name" => "GUERNSEY", "ar_name" => "جيرنسي", "country_code" =>    "GG"],
            ["en_name" => "GUINEA", "ar_name" => "غينيا", "country_code" =>    "GN"],
            ["en_name" => "GUINEA-BISSAU", "ar_name" => "غينيا بيساو", "country_code" =>    "GW"],
            ["en_name" => "GUYANA", "ar_name" => "غيانا", "country_code" =>    "GY"],
            ["en_name" => "HAITI", "ar_name" => "هايتي", "country_code" =>    "HT"],
            ["en_name" => "HEARD ISLAND AND MCDONALD ISLANDS", "ar_name" => "قلب الجزيرة وجزر ماكدونالز", "country_code" =>    "HM"],
            ["en_name" => "HOLY SEE (VATICAN CITY STATE)", "ar_name" => "الكرسي الرسولي (دولة مدينة الفاتيكان)", "country_code" =>    "VA"],
            ["en_name" => "HONDURAS", "ar_name" => "هندوراس", "country_code" =>    "HN"],
            ["en_name" => "HONG KONG", "ar_name" => "هونج كونج", "country_code" =>    "HK"],
            ["en_name" => "HUNGARY", "ar_name" => "هنغاريا", "country_code" =>    "HU"],
            ["en_name" => "ICELAND", "ar_name" => "أيسلندا", "country_code" =>    "IS"],
            ["en_name" => "INDIA", "ar_name" => "الهند", "country_code" =>    "IN"],
            ["en_name" => "INDONESIA", "ar_name" => "إندونيسيا", "country_code" =>    "ID"],
            ["en_name" => "INSTALLATIONS IN INTERNATIONAL WATERS", "ar_name" => "المنشآت في المياه الدولية", "country_code" =>    "XZ"],
            ["en_name" => "IRAN, ISLAMIC REPUBLIC OF", "ar_name" => "إيران ، جمهورية", "country_code" =>    "IR"],
            ["en_name" => "IRAQ", "ar_name" => "العراق", "country_code" =>    "IQ"],
            ["en_name" => "IRELAND", "ar_name" => "إيرلندا", "country_code" =>    "IE"],
            ["en_name" => "ISLE OF MAN", "ar_name" => "جزيرة آيل أوف مان", "country_code" =>    "IM"],
            ["en_name" => "ISRAEL", "ar_name" => "إسرائيل", "country_code" =>    "IL"],
            ["en_name" => "ITALY", "ar_name" => "إيطاليا", "country_code" =>    "IT"],
            ["en_name" => "JAMAICA", "ar_name" => "جامايكا", "country_code" =>    "JM"],
            ["en_name" => "JAPAN", "ar_name" => "اليابان", "country_code" =>    "JP"],
            ["en_name" => "JERSEY", "ar_name" => "جيرسي", "country_code" =>    "JE"],
            ["en_name" => "JORDAN", "ar_name" => "الأردن", "country_code" =>    "JO"],
            ["en_name" => "KAZAKHSTAN", "ar_name" => "كازاخستان", "country_code" =>    "KZ"],
            ["en_name" => "KENYA", "ar_name" => "كينيا", "country_code" =>    "KE"],
            ["en_name" => "KIRIBATI", "ar_name" => "كيريباتي", "country_code" =>    "KI"],
            ["en_name" => "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF", "ar_name" => "كوريا، الجمهورية الشعبية الديمقراطية", "country_code" =>    "KP"],
            ["en_name" => "KOREA, REPUBLIC OF", "ar_name" => "جمهورية كوريا", "country_code" =>    "KR"],
            ["en_name" => "KUWAIT", "ar_name" => "الكويت", "country_code" =>    "KW"],
            ["en_name" => "KYRGYZSTAN", "ar_name" => "قيرغيزستان", "country_code" =>    "KG"],
            ["en_name" => "LAO PEOPLE'S DEMOCRATIC REPUBLIC", "ar_name" => "جمهورية لاو الديمقراطية الشعبية", "country_code" =>    "LA"],
            ["en_name" => "LATVIA", "ar_name" => "لاتفيا", "country_code" =>    "LV"],
            ["en_name" => "LEBANON", "ar_name" => "لبنان", "country_code" =>    "LB"],
            ["en_name" => "LESOTHO", "ar_name" => "ليسوتو", "country_code" =>    "LS"],
            ["en_name" => "LIBERIA", "ar_name" => "ليبيريا", "country_code" =>    "LR"],
            ["en_name" => "LIBYA", "ar_name" => "ليبيا", "country_code" =>    "LY"],
            ["en_name" => "LIECHTENSTEIN", "ar_name" => "ليختنشتاين", "country_code" =>    "LI"],
            ["en_name" => "LITHUANIA", "ar_name" => "ليثوانيا", "country_code" =>    "LT"],
            ["en_name" => "LUXEMBOURG", "ar_name" => "لوكسمبورغ", "country_code" =>    "LU"],
            ["en_name" => "MACAO", "ar_name" => "ماكاو", "country_code" =>    "MO"],
            ["en_name" => "MADAGASCAR", "ar_name" => "مدغشقر", "country_code" =>    "MG"],
            ["en_name" => "MALAWI", "ar_name" => "ملاوي", "country_code" =>    "MW"],
            ["en_name" => "MALAYSIA", "ar_name" => "ماليزيا", "country_code" =>    "MY"],
            ["en_name" => "MALDIVES", "ar_name" => "جزر المالديف", "country_code" =>    "MV"],
            ["en_name" => "MALI", "ar_name" => "مالي", "country_code" =>    "ML"],
            ["en_name" => "MALTA", "ar_name" => "مالطا", "country_code" =>    "MT"],
            ["en_name" => "MARSHALL ISLANDS (THE)", "ar_name" => "جزر مارشال (THE)", "country_code" =>    "MH"],
            ["en_name" => "MARTINIQUE", "ar_name" => "مارتينيك", "country_code" =>    "MQ"],
            ["en_name" => "MAURITANIA", "ar_name" => "موريتانيا", "country_code" =>    "MR"],
            ["en_name" => "MAURITIUS", "ar_name" => "موريشيوس", "country_code" =>    "MU"],
            ["en_name" => "MAYOTTE", "ar_name" => "مايوت", "country_code" =>    "YT"],
            ["en_name" => "MEXICO", "ar_name" => "المكسيك", "country_code" =>    "MX"],
            ["en_name" => "MICRONESIA, FEDERATED STATES OF", "ar_name" => "ميكرونيزيا ، الدول الاتحادية", "country_code" =>    "FM"],
            ["en_name" => "MOLDOVA, REPUBLIC OF", "ar_name" => "جمهورية مولدوفا", "country_code" =>    "MD"],
            ["en_name" => "MONACO", "ar_name" => "موناكو", "country_code" =>    "MC"],
            ["en_name" => "MONGOLIA", "ar_name" => "منغوليا", "country_code" =>    "MN"],
            ["en_name" => "MONTENEGRO", "ar_name" => "مونتينيغرو", "country_code" =>    "ME"],
            ["en_name" => "MONTSERRAT", "ar_name" => "مونتسيرات", "country_code" =>    "MS"],
            ["en_name" => "MOROCCO", "ar_name" => "المغرب", "country_code" =>    "MA"],
            ["en_name" => "MOZAMBIQUE", "ar_name" => "موزامبيق", "country_code" =>    "MZ"],
            ["en_name" => "MYANMAR", "ar_name" => "ميانمار", "country_code" =>    "MM"],
            ["en_name" => "NAMIBIA", "ar_name" => "ناميبيا", "country_code" =>    "NA"],
            ["en_name" => "NAURU", "ar_name" => "ناورو", "country_code" =>    "NR"],
            ["en_name" => "NEPAL", "ar_name" => "النيبال", "country_code" =>    "NP"],
            ["en_name" => "NETHERLANDS", "ar_name" => "هولندا", "country_code" =>    "NL"],
            ["en_name" => "NEW CALEDONIA", "ar_name" => "كاليدونيا الجديدة", "country_code" =>    "NC"],
            ["en_name" => "NEW ZEALAND", "ar_name" => "نيوزيلاندا", "country_code" =>    "NZ"],
            ["en_name" => "NICARAGUA", "ar_name" => "نيكاراغوا", "country_code" =>    "NI"],
            ["en_name" => "NIGER", "ar_name" => "النيجر", "country_code" =>    "NE"],
            ["en_name" => "NIGERIA", "ar_name" => "نيجيريا", "country_code" =>    "NG"],
            ["en_name" => "NIUE", "ar_name" => "نيوي", "country_code" =>    "NU"],
            ["en_name" => "NORFOLK ISLAND", "ar_name" => "جزيرة نورفولك", "country_code" =>    "NF"],
            ["en_name" => "NORTH MACEDONIA", "ar_name" => "شمال مقدونيا", "country_code" =>    "MK"],
            ["en_name" => "NORTHERN MARIANA ISLANDS (THE)", "ar_name" => "جزر ماريانا الشمالية (THE)", "country_code" =>    "MP"],
            ["en_name" => "NORWAY", "ar_name" => "النرويج", "country_code" =>    "NO"],
            ["en_name" => "OMAN", "ar_name" => "سلطنة عمان", "country_code" =>    "OM"],
            ["en_name" => "PAKISTAN", "ar_name" => "باكستان", "country_code" =>    "PK"],
            ["en_name" => "PALAU", "ar_name" => "بالاو", "country_code" =>    "PW"],
            ["en_name" => "PALESTINE, STATE OF", "ar_name" => "دولة فلسطين", "country_code" =>    "PS"],
            ["en_name" => "PANAMA", "ar_name" => "بنما", "country_code" =>    "PA"],
            ["en_name" => "PAPUA NEW GUINEA", "ar_name" => "بابوا غينيا الجديدة", "country_code" =>    "PG"],
            ["en_name" => "PARAGUAY", "ar_name" => "باراغواي", "country_code" =>    "PY"],
            ["en_name" => "PERU", "ar_name" => "بيرو", "country_code" =>    "PE"],
            ["en_name" => "PHILIPPINES (THE)", "ar_name" => "الفلبين (THE)", "country_code" =>    "PH"],
            ["en_name" => "PITCAIRN", "ar_name" => "بيتكيرن", "country_code" =>    "PN"],
            ["en_name" => "POLAND", "ar_name" => "بولندا", "country_code" =>    "PL"],
            ["en_name" => "PORTUGAL", "ar_name" => "البرتغال", "country_code" =>    "PT"],
            ["en_name" => "PUERTO RICO", "ar_name" => "بويرتو ريكو", "country_code" =>    "PR"],
            ["en_name" => "QATAR", "ar_name" => "دولة قطر", "country_code" =>    "QA"],
            ["en_name" => "RÉUNION", "ar_name" => "جمع شمل", "country_code" =>    "RE"],
            ["en_name" => "ROMANIA", "ar_name" => "رومانيا", "country_code" =>    "RO"],
            ["en_name" => "RUSSIAN FEDERATION (THE)", "ar_name" => "الاتحاد الروسي (THE)", "country_code" =>    "RU"],
            ["en_name" => "RWANDA", "ar_name" => "رواندا", "country_code" =>    "RW"],
            ["en_name" => "SAINT BARTHÉLEMY", "ar_name" => "سانت بارتيليمي", "country_code" =>    "BL"],
            ["en_name" => "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA", "ar_name" => "سانت هيلينا وأسينسيون وتريستان دا كونها", "country_code" =>    "SH"],
            ["en_name" => "SAINT KITTS AND NEVIS", "ar_name" => "سانت كيتس ونيفيس", "country_code" =>    "KN"],
            ["en_name" => "SAINT LUCIA", "ar_name" => "القديسة لوسيا", "country_code" =>    "LC"],
            ["en_name" => "SAINT MARTIN (FRENCH PART)", "ar_name" => "سانت مارتن (الجزء الفرنسي)", "country_code" =>    "MF"],
            ["en_name" => "SAINT PIERRE AND MIQUELON", "ar_name" => "سانت بيير وميكلون", "country_code" =>    "PM"],
            ["en_name" => "SAINT VINCENT AND THE GRENADINES", "ar_name" => "سانت فنسنت وجزر غرينادين", "country_code" =>    "VC"],
            ["en_name" => "SAMOA", "ar_name" => "ساموا", "country_code" =>    "WS"],
            ["en_name" => "SAN MARINO", "ar_name" => "سان مارينو", "country_code" =>    "SM"],
            ["en_name" => "SAO TOME AND PRINCIPE", "ar_name" => "ساو توم و برينسيب", "country_code" =>    "ST"],
            ["en_name" => "SAUDI ARABIA", "ar_name" => "المملكة العربية السعودية", "country_code" =>    "SA"],
            ["en_name" => "SENEGAL", "ar_name" => "السنغال", "country_code" =>    "SN"],
            ["en_name" => "SERBIA", "ar_name" => "صربيا", "country_code" =>    "RS"],
            ["en_name" => "SEYCHELLES", "ar_name" => "سيشل", "country_code" =>    "SC"],
            ["en_name" => "SIERRA LEONE", "ar_name" => "سيرا ليون", "country_code" =>    "SL"],
            ["en_name" => "SINGAPORE", "ar_name" => "سنغافورة", "country_code" =>    "SG"],
            ["en_name" => "SINT MAARTEN (DUTCH PART)", "ar_name" => "سينت مارتن (الجزء الهولندي)", "country_code" =>    "SX"],
            ["en_name" => "SLOVAKIA", "ar_name" => "سلوفاكيا", "country_code" =>    "SK"],
            ["en_name" => "SLOVENIA", "ar_name" => "سلوفينيا", "country_code" =>    "SI"],
            ["en_name" => "SOLOMON ISLANDS", "ar_name" => "جزر سليمان", "country_code" =>    "SB"],
            ["en_name" => "SOMALIA", "ar_name" => "الصومال", "country_code" =>    "SO"],
            ["en_name" => "SOUTH AFRICA", "ar_name" => "جنوب أفريقيا", "country_code" =>    "ZA"],
            ["en_name" => "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS", "ar_name" => "جورجيا الجنوبية وجزر ساندويتش الجنوبية", "country_code" =>    "GS"],
            ["en_name" => "SOUTH SUDAN", "ar_name" => "جنوب السودان", "country_code" =>    "SS"],
            ["en_name" => "SPAIN", "ar_name" => "إسبانيا", "country_code" =>    "ES"],
            ["en_name" => "SRI LANKA", "ar_name" => "سيريلانكا", "country_code" =>    "LK"],
            ["en_name" => "SUDAN (THE)", "ar_name" => "السودان (THE)", "country_code" =>    "SD"],
            ["en_name" => "SURINAME", "ar_name" => "سورينام", "country_code" =>    "SR"],
            ["en_name" => "SVALBARD AND JAN MAYEN", "ar_name" => "سفالبارد وجان ماين", "country_code" =>    "SJ"],
            ["en_name" => "SWEDEN", "ar_name" => "السويد", "country_code" =>    "SE"],
            ["en_name" => "SWITZERLAND", "ar_name" => "سويسرا", "country_code" =>    "CH"],
            ["en_name" => "SYRIAN ARAB REPUBLIC (THE)", "ar_name" => "الجمهورية العربية السورية (THE)", "country_code" =>    "SY"],
            ["en_name" => "TAIWAN (PROVINCE OF CHINA)", "ar_name" => "تايوان (مقاطعة الصين)", "country_code" =>    "TW"],
            ["en_name" => "TAJIKISTAN", "ar_name" => "طاجيكستان", "country_code" =>    "TJ"],
            ["en_name" => "TANZANIA, UNITED REPUBLIC OF", "ar_name" => "جمهورية تنزانيا المتحدة", "country_code" =>    "TZ"],
            ["en_name" => "THAILAND", "ar_name" => "تايلاند", "country_code" =>    "TH"],
            ["en_name" => "TIMOR-LESTE", "ar_name" => "تيمور ليست", "country_code" =>    "TL"],
            ["en_name" => "TOGO", "ar_name" => "توجو", "country_code" =>    "TG"],
            ["en_name" => "TOKELAU", "ar_name" => "توكيلاو", "country_code" =>    "TK"],
            ["en_name" => "TONGA", "ar_name" => "تونجا", "country_code" =>    "TO"],
            ["en_name" => "TRINIDAD AND TOBAGO", "ar_name" => "ترينداد وتوباغو", "country_code" =>    "TT"],
            ["en_name" => "TUNISIA", "ar_name" => "تونس", "country_code" =>    "TN"],
            ["en_name" => "TURKEY", "ar_name" => "ديك رومى", "country_code" =>    "TR"],
            ["en_name" => "TURKMENISTAN", "ar_name" => "تركمانستان", "country_code" =>    "TM"],
            ["en_name" => "TURKS AND CAICOS ISLANDS (THE)", "ar_name" => "جزر تركس وكايكوس (THE)", "country_code" =>    "TC"],
            ["en_name" => "TUVALU", "ar_name" => "توفالو", "country_code" =>    "TV"],
            ["en_name" => "UGANDA", "ar_name" => "أوغندا", "country_code" =>    "UG"],
            ["en_name" => "UKRAINE", "ar_name" => "أوكرانيا", "country_code" =>    "UA"],
            ["en_name" => "UNITED ARAB EMIRATES (THE)", "ar_name" => "الإمارات العربية المتحدة (THE)", "country_code" =>    "AE"],
            ["en_name" => "UNITED KINGDOM", "ar_name" => "المملكة المتحدة", "country_code" =>    "GB"],
            ["en_name" => "UNITED STATES MINOR OUTLYING ISLANDS", "ar_name" => "جزر الولايات المتحدة البعيدة الصغرى", "country_code" =>    "UM"],
            ["en_name" => "UNITED STATES OF AMERICA (THE)", "ar_name" => "الولايات المتحدة الأمريكية (THE)", "country_code" =>    "US"],
            ["en_name" => "URUGUAY", "ar_name" => "أوروجواي", "country_code" =>    "UY"],
            ["en_name" => "UZBEKISTAN", "ar_name" => "أوزبيكستان", "country_code" =>    "UZ"],
            ["en_name" => "VANUATU", "ar_name" => "فانواتو", "country_code" =>    "VU"],
            ["en_name" => "VENEZUELA (BOLIVARIAN REPUBLIC OF)", "ar_name" => "فنزويلا (جمهورية البوليفارية)", "country_code" =>    "VE"],
            ["en_name" => "VIET NAM", "ar_name" => "فيتنام", "country_code" =>    "VN"],
            ["en_name" => "VIRGIN ISLANDS (BRITISH)", "ar_name" => "جزر العذراء البريطانية)", "country_code" =>    "VG"],
            ["en_name" => "VIRGIN ISLANDS (U.S.)", "ar_name" => "جزر العذراء (الولايات المتحدة)", "country_code" =>    "VI"],
            ["en_name" => "WALLIS AND FUTUNA", "ar_name" => "واليس وفوتونا", "country_code" =>    "WF"],
            ["en_name" => "WESTERN SAHARA", "ar_name" => "الصحراء الغربية", "country_code" =>    "EH"],
            ["en_name" => "YEMEN", "ar_name" => "اليمن", "country_code" =>    "YE"],
            ["en_name" => "ZAMBIA", "ar_name" => "زامبيا", "country_code" =>    "ZM"],
            ["en_name" => "ZIMBABWE", "ar_name" => "زمب ـ ابوي", "country_code" =>    "ZW"],
            ["en_name" => "ÅLAND ISLANDS", "ar_name" => "جزر آلاند", "country_code" =>    "AX"],

        ];
        Country::insert($items);
        //
    }
}
