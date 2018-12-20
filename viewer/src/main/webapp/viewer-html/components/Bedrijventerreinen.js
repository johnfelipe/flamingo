/* 
 * Copyright (C) 2012-2018 B3Partners B.V.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Bedrijventerreinen component
 * @author <a href="mailto:geertplaisier@b3partners.nl">Geert Plaisier</a>
 */
var BEDRIJVENTERREINEN_DUMMY_DATA = [ { "gemeente": "HARDENBERG", "bedrijventerrein": "BROEKLANDEN" }, { "gemeente": "DALFSEN", "bedrijventerrein": "KAMPMANSWEG" }, { "gemeente": "DEVENTER", "bedrijventerrein": "KLOOSTERLANDEN" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "VROOMSHOOP OOST" }, { "gemeente": "DALFSEN", "bedrijventerrein": "POSTHOORNWEG" }, { "gemeente": "STAPHORST", "bedrijventerrein": "R.D. BUGELSTRAAT" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "HET WEGDAM, UITBREIDING" }, { "gemeente": "HENGELO", "bedrijventerrein": "WESTERMAAT ZUID-WEST" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "HET WEGDAM" }, { "gemeente": "WIERDEN", "bedrijventerrein": "HOGELUCHT" }, { "gemeente": "DALFSEN", "bedrijventerrein": "DE GRIFT II (2004)" }, { "gemeente": "HAAKSBERGEN", "bedrijventerrein": "STEPELERVELD FASE 1" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "SCHUTTERSVELD" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "MEENTEWEG" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "DE KEIZER" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "HOLTERBERG OAD TERREIN" }, { "gemeente": "LOSSER", "bedrijventerrein": "ELFERINKSEWEG" }, { "gemeente": "DINKELLAND", "bedrijventerrein": "ROSSUM" }, { "gemeente": "DALFSEN", "bedrijventerrein": "MULDERSVELD" }, { "gemeente": "DEVENTER", "bedrijventerrein": "BEDRIJVENPARK A1" }, { "gemeente": "ALMELO", "bedrijventerrein": "AALDERINKSHOEK" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "BEDRIJVENTERREIN HASSELT" }, { "gemeente": "RAALTE", "bedrijventerrein": "TELGEN II" }, { "gemeente": "ALMELO", "bedrijventerrein": "WENDELGOOR" }, { "gemeente": "TUBBERGEN", "bedrijventerrein": "VOORTSWEG" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "OSSENZIJL" }, { "gemeente": "KAMPEN", "bedrijventerrein": "KOEKOEKSPOLDER" }, { "gemeente": "STAPHORST", "bedrijventerrein": "INDUSTRIE 123" }, { "gemeente": "WIERDEN", "bedrijventerrein": "FLEUWEWEG" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "BOTERBERG-NOORD" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "MEPPELERDIEP" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "GROOT VERLAAT" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "HAVEN TWENTEKANAAL" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "WEITZELWEG 2-B" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "ELSMORS" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "DE BOSCHKAMP" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "HOOIDIJK" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "HEETVELD" }, { "gemeente": "HENGELO", "bedrijventerrein": "OOSTERVELD" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "KANAALDIJK WEST" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "HAARDIJK" }, { "gemeente": "STAPHORST", "bedrijventerrein": "IJHORST" }, { "gemeente": "RAALTE", "bedrijventerrein": "ZWOLSEWEG" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "WOLDMEENTHERAND" }, { "gemeente": "TUBBERGEN", "bedrijventerrein": "BEDRIJVENTERREIN LUTKEBERG GEESTEREN" }, { "gemeente": "RAALTE", "bedrijventerrein": "DE ZEGGE I T/M V" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "WISSELING" }, { "gemeente": "ALMELO", "bedrijventerrein": "BEDRIJVENPARK TWENTE" }, { "gemeente": "LOSSER", "bedrijventerrein": "DORP" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "DE WHEE 1+2" }, { "gemeente": "ALMELO", "bedrijventerrein": "XL BUSINESSPARK TWENTE (RBT)" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "CONCRELITLOCATIE" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "T LOCHTER ZUID" }, { "gemeente": "KAMPEN", "bedrijventerrein": "UITBREIDING SPOORLANDEN" }, { "gemeente": "HENGELO", "bedrijventerrein": "TWENTEKANAAL ZUID" }, { "gemeente": "DALFSEN", "bedrijventerrein": "DE BRINK" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "TRANSPORTCENTRUM" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "EEKTE-HAZEWINKEL" }, { "gemeente": "STAPHORST", "bedrijventerrein": "INDUSTRIE IV" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "DE MEENTE NOORD" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "BEDRIJVENTERREIN DE BREKER" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "OVER T SPOOR" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "HANZEPOORT" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "BT 1982" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "ZOMERDIJK" }, { "gemeente": "ZWOLLE", "bedrijventerrein": "MARSLANDEN G" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "UITBREIDING CONDOR HASSELT" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "DE MEENTE-ZUID" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "KUINRE" }, { "gemeente": "KAMPEN", "bedrijventerrein": "SPOORLANDEN" }, { "gemeente": "HAAKSBERGEN", "bedrijventerrein": "TOLSTRAAT BRAMMELO" }, { "gemeente": "DEVENTER", "bedrijventerrein": "HANDELSPARK DE WETERING" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "WEITKAMPLAAN" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "DOLDERKANAAL" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "ZUIVELFABRIEK" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "TECHNOLOGY BASE" }, { "gemeente": "WIERDEN", "bedrijventerrein": "BAANAKKERS" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "LINDERVELD" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "MALLE GAT II" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "JOSINK ES" }, { "gemeente": "TUBBERGEN", "bedrijventerrein": "TEN CATE" }, { "gemeente": "WIERDEN", "bedrijventerrein": "KLUINVEEN" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "KANAALWEG OOST" }, { "gemeente": "ALMELO", "bedrijventerrein": "AADIJK-NOORD" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "WEITZELPOORT 3" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "HARDICK EN SECKEL" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "DE BLEEKERIJ" }, { "gemeente": "DALFSEN", "bedrijventerrein": "DE MEELE" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "TWISTVEEN" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "VLETGAARSMATEN I" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "DORPSSTRAAT WEST" }, { "gemeente": "RAALTE", "bedrijventerrein": "BROEKLAND II" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "NOORD ACHTERESCH I" }, { "gemeente": "ZWOLLE", "bedrijventerrein": "MARSLANDEN ZUID" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "ZUIDERVAL-KOTMANPLAATS" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "T LOCHTER OOST I" }, { "gemeente": "RAALTE", "bedrijventerrein": "MARIENHEEM" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "ROOMBEKERVELD" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "HAZEWINKEL U" }, { "gemeente": "TUBBERGEN", "bedrijventerrein": "BEDRIJVENTERREIN ALBERGEN" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "HAZEWINKEL ZUIDWEST" }, { "gemeente": "HENGELO", "bedrijventerrein": "OOSTERVELD WEIJINKSHOEK" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "HOOFDVAART" }, { "gemeente": "HENGELO", "bedrijventerrein": "WESTERMAAT KW II" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "TSM" }, { "gemeente": "HENGELO", "bedrijventerrein": "TWENTEKANAAL NOORD" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "ZEVENHONT I+II" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "HET SANDER" }, { "gemeente": "HENGELO", "bedrijventerrein": "WESTERMAAT ZUID-OOST" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "ZWEMBADLAAN" }, { "gemeente": "RAALTE", "bedrijventerrein": "HEETEN 1997" }, { "gemeente": "STAPHORST", "bedrijventerrein": "ACHTHOEVENWEG" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "KROEZENHOEK" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "SLUISKADE" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "BOGRO" }, { "gemeente": "ALMELO", "bedrijventerrein": "DIENSTENGEBIED" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "VLETGAARSMATEN II" }, { "gemeente": "DALFSEN", "bedrijventerrein": "UITBREIDING DE GRIFT III" }, { "gemeente": "DALFSEN", "bedrijventerrein": "PARALLELWEG" }, { "gemeente": "HENGELO", "bedrijventerrein": "ZEGGERSHOEK- FABELENWEG-UITBREIDING" }, { "gemeente": "OMMEN", "bedrijventerrein": "DE STRANGEN" }, { "gemeente": "RAALTE", "bedrijventerrein": "DE ZEGGE VI" }, { "gemeente": "BORNE", "bedrijventerrein": "WESTERMAAT DE VELDKAMP" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "DEPPENBROEK" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "ZENKELDAMSHOEK (OMZ)" }, { "gemeente": "RAALTE", "bedrijventerrein": "NIEUW HEETEN ZUID" }, { "gemeente": "RAALTE", "bedrijventerrein": "BLANKENFOORT II" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "INDUSTRIE NOORD" }, { "gemeente": "ZWOLLE", "bedrijventerrein": "SCHOLTENSSTEEG" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "DEN HAM KOM I" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "RIGTERSBLEEK/TUBANTIA" }, { "gemeente": "ALMELO", "bedrijventerrein": "BEDRIJVENPARK TWENTE-NOORD" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "NIEUWE HAVEN I II + BRU" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "BOELDERSHOEK-TWENCE" }, { "gemeente": "DINKELLAND", "bedrijventerrein": "DE MORS OOTMARSUM" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "KANAALWEG ZUID" }, { "gemeente": "DALFSEN", "bedrijventerrein": "DE GRIFT" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "SCHNEIDERBOS I EN II" }, { "gemeente": "LOSSER", "bedrijventerrein": "ZOEKER ESCH/ DE POL" }, { "gemeente": "HENGELO", "bedrijventerrein": "WESTERMAAT CAMPUS" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "VROOMSHOOP CENTRUM" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "RUIMERSDIJK" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "GIETHOORN DORP" }, { "gemeente": "KAMPEN", "bedrijventerrein": "ZUIDERZEEHAVEN" }, { "gemeente": "ALMELO", "bedrijventerrein": "DOLLEGOOR" }, { "gemeente": "RAALTE", "bedrijventerrein": "T ZEEGSVELD" }, { "gemeente": "RAALTE", "bedrijventerrein": "OOST I (GEBIED BEAPHAR)" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "SCHAARKAMPEN" }, { "gemeente": "DEVENTER", "bedrijventerrein": "LETTELE" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "ELSMOAT FASE II" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "GARSTELANDEN OOST 2E FASE" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "HOLTHEME" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "EESERWOLD" }, { "gemeente": "DALFSEN", "bedrijventerrein": "DE MEELE III" }, { "gemeente": "KAMPEN", "bedrijventerrein": "GRAFHORST" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "NIJVERDAL NOORD III" }, { "gemeente": "WIERDEN", "bedrijventerrein": "VIOLENHOEK" }, { "gemeente": "HENGELO", "bedrijventerrein": "ANNINKSWEG-NIJHOFSHOEK" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "ENTERSTRAAT" }, { "gemeente": "RAALTE", "bedrijventerrein": "TELGEN I" }, { "gemeente": "KAMPEN", "bedrijventerrein": "HAATLAND" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "T LOCHTER OOST II" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "ENK-ZUID" }, { "gemeente": "ALMELO", "bedrijventerrein": "JACQUES PERKSTRAAT" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "BOTERBERG-ZUID" }, { "gemeente": "RAALTE", "bedrijventerrein": "LUTTENBERG" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "DORPSSTRAAT OOST" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "BENTELO/GRONTHUTTENWEG" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "INDUSTRIEWEG" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "HAVENGEBIED" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "DE KRIM II" }, { "gemeente": "ZWOLLE", "bedrijventerrein": "HESSENPOORT" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "WESEPE, UITBREIDING ZUID" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "ALMELOSEWEG" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "SALOMONSONSTRAAT" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "MARKELOSEWEG" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "OLST" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "SPECHTHORST 1 + 2" }, { "gemeente": "WIERDEN", "bedrijventerrein": "WEUSTE-NOORD" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "WOLDMEENTHE" }, { "gemeente": "DALFSEN", "bedrijventerrein": "UITBREIDING KAMPMANSWEG" }, { "gemeente": "TUBBERGEN", "bedrijventerrein": "DE KRON" }, { "gemeente": "RAALTE", "bedrijventerrein": "BLANKENFOORT" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "DE WILDKAMP" }, { "gemeente": "HAAKSBERGEN", "bedrijventerrein": "DE PAS" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "GEZONDHEIDSPARK HARDENBERG 1" }, { "gemeente": "HENGELO", "bedrijventerrein": "WESTERMAAT EXPRESS" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "ZEVENHONT IV" }, { "gemeente": "KAMPEN", "bedrijventerrein": "IJSSELDIJK" }, { "gemeente": "ZWOLLE", "bedrijventerrein": "HESSENPOORT III" }, { "gemeente": "ALMELO", "bedrijventerrein": "NOORDBROEK" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "WEITZELWEG I" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "DE HAAR II" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "BEDRIJVENTERREIN RIJSSEN" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "WEERDIJK" }, { "gemeente": "STAPHORST", "bedrijventerrein": "DE ESCH III" }, { "gemeente": "DALFSEN", "bedrijventerrein": "MIDDENGEBIED" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "LINDERFLIER" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "TSB TERREIN" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "DE DOORBRAAK" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "GARSTELANDEN II" }, { "gemeente": "DINKELLAND", "bedrijventerrein": "BEDRIJVENTERREIN ECHELPOEL & GUNNERSTRAAT" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "ROLLEPAAL" }, { "gemeente": "HENGELO", "bedrijventerrein": "BERFLO ES B" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "NOVAC-TERREIN" }, { "gemeente": "HAAKSBERGEN", "bedrijventerrein": "INDUSTRIE WEST" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "DE ESSEN" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "GIETHOORN ZUID" }, { "gemeente": "DEVENTER", "bedrijventerrein": "SMEENKHOF" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "MOERHEIMSTRAAT" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "TWENTEKANAAL" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "KORNELIS" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "ZENKELDAMSHOEK (Aan de Stegge)" }, { "gemeente": "TUBBERGEN", "bedrijventerrein": "LANGEVEEN" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "SCHUINESLOOT" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "BROEKLANDEN-ZUID-UITBREIDING" }, { "gemeente": "HAAKSBERGEN", "bedrijventerrein": "STEPELERVELD FASE 2" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "SLIJPSTEEN" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "KANAALWEG" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "NABERMAN" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "OOSTERWEILANDEN" }, { "gemeente": "RAALTE", "bedrijventerrein": "RAALTE ZUID" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "BUITENKWARTIER" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "HANZEPOORT-WEST" }, { "gemeente": "ALMELO", "bedrijventerrein": "TURFKADE" }, { "gemeente": "STAPHORST", "bedrijventerrein": "DE BAARGE (INDUSTRIE VI)" }, { "gemeente": "KAMPEN", "bedrijventerrein": "BEDRIJVENPARK RIJKSWEG 50" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "WESEPE" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "STATIONSWEG" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "HENGEVELDE CONSOLIDATIEPLAN" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "GOORSEWEG (ARKERVAART)" }, { "gemeente": "RAALTE", "bedrijventerrein": "MBI-TERREIN" }, { "gemeente": "HAAKSBERGEN", "bedrijventerrein": "ISIDORUSHOEVE I" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "DE PLOOY" }, { "gemeente": "TUBBERGEN", "bedrijventerrein": "BEDRIJVENTERREIN TUBBERGEN" }, { "gemeente": "STAPHORST", "bedrijventerrein": "DE ESCH 0" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "ZEVENHONT III" }, { "gemeente": "WIERDEN", "bedrijventerrein": "ELSMOAT FASE I" }, { "gemeente": "ALMELO", "bedrijventerrein": "ZEEAREND" }, { "gemeente": "OMMEN", "bedrijventerrein": "ALTEVEER" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "SCHUTSTRAAT" }, { "gemeente": "DINKELLAND", "bedrijventerrein": "UITBREIDING/AFRONDING DE MORS IV" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "DEVENTERPOORT" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "LANGESTRAAT (ELEMENTIS)" }, { "gemeente": "ALMELO", "bedrijventerrein": "UITBREIDING DOLLEGOOR" }, { "gemeente": "ALMELO", "bedrijventerrein": "WINDMOLEN" }, { "gemeente": "RAALTE", "bedrijventerrein": "DE ZEGGE VII" }, { "gemeente": "STAPHORST", "bedrijventerrein": "DE ESCH I" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "DE ENK" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "GARSTELANDEN III" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "DE KOL" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "BEULAKERWEG" }, { "gemeente": "RIJSSEN-HOLTEN", "bedrijventerrein": "DE HAAR I" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "T LOCHTER I" }, { "gemeente": "HAAKSBERGEN", "bedrijventerrein": "T VARK" }, { "gemeente": "STAPHORST", "bedrijventerrein": "OOSTERPARALLELWEG 2007" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "GROOTE PLOOY" }, { "gemeente": "DINKELLAND", "bedrijventerrein": "VELDZIJDE" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "DE SLUIS I + II" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "ALMELOSEWEG OOST" }, { "gemeente": "HAAKSBERGEN", "bedrijventerrein": "STEPELO" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "EUREGIO BEDRIJVENPARK" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "VROOMSHOOP ZUIDOOST" }, { "gemeente": "HENGELO", "bedrijventerrein": "TIMMERSVELD" }, { "gemeente": "ZWOLLE", "bedrijventerrein": "VOORST" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "JUFFERBEEK ZUID" }, { "gemeente": "BORNE", "bedrijventerrein": "MOLENKAMP" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "MEPPELERWEG" }, { "gemeente": "DALFSEN", "bedrijventerrein": "OOSTERV/ZIELEM/STE" }, { "gemeente": "DALFSEN", "bedrijventerrein": "DE BRINK II" }, { "gemeente": "RAALTE", "bedrijventerrein": "T ZEEGSVELD UITBR." }, { "gemeente": "ALMELO", "bedrijventerrein": "BUITENHAVEN  (INCL. GRASLAAN)" }, { "gemeente": "ZWOLLE", "bedrijventerrein": "MARSLANDEN" }, { "gemeente": "HAAKSBERGEN", "bedrijventerrein": "DE GREUNE" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "WEITZELWEG 2-A" }, { "gemeente": "DALFSEN", "bedrijventerrein": "RONDWEG" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "VRIEZENDIJK" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "JUFFERBEEK-NOORD" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "KATINGERVELD" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "BROEKLANDEN-ZUID" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "SIBCULO I" }, { "gemeente": "DALFSEN", "bedrijventerrein": "UITBREIDING T'FEBRIEK, GEDEELTE STAPPENBELT" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "WESTERVAL" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "DE WEYERT" }, { "gemeente": "LOSSER", "bedrijventerrein": "ESSENWEG" }, { "gemeente": "TUBBERGEN", "bedrijventerrein": "VASSERDIJK" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "PR MARIJKELAAN" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "SCHEERWOLDE" }, { "gemeente": "ALMELO", "bedrijventerrein": "TWENTEPOORT" }, { "gemeente": "DALFSEN", "bedrijventerrein": "WELSUM" }, { "gemeente": "LOSSER", "bedrijventerrein": "LUTTERMOLENWEG" }, { "gemeente": "DEVENTER", "bedrijventerrein": "LOOWEG" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "KRUIDENWIJK-ZUID" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "DE REULVER" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "GARSTWEG" }, { "gemeente": "HENGELO", "bedrijventerrein": "ZEGGERSHOEK- FABELENWEG" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "USSELER ES" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "BOERHAAR" }, { "gemeente": "STAPHORST", "bedrijventerrein": "DE ESCH II" }, { "gemeente": "ALMELO", "bedrijventerrein": "GEORGE BREITNERSTRAAT" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "BOMA KLOOSTERDIJK" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "HOOIDIJK NOORD-WEST" }, { "gemeente": "KAMPEN", "bedrijventerrein": "ZENDIJK" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "OOSTERMEENTHERAND" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "GARSTELANDEN OOST" }, { "gemeente": "DALFSEN", "bedrijventerrein": "SCHOOLSTRAAT" }, { "gemeente": "HENGELO", "bedrijventerrein": "ROERSHOEK" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "WERKGEBIED MOESHOEK" }, { "gemeente": "ALMELO", "bedrijventerrein": "KLUPPELSHUIZEN" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "SLEUTELKAMP" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "STEENMAAT" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "SPORTLAAN" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "SCHAARKAMPEN-ZUID" }, { "gemeente": "HENGELO", "bedrijventerrein": "BERFLO ES E" }, { "gemeente": "OLDENZAAL", "bedrijventerrein": "HAZEWINKEL NOORDWEST" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "VAN ROYENSWEG" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "EESVEENSEWEG" }, { "gemeente": "OLST-WIJHE", "bedrijventerrein": "WESEPE, UITBREIDING" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "DIAMANT BEDRIJFSTERREIN" }, { "gemeente": "STAPHORST", "bedrijventerrein": "INDUSTRIE V" }, { "gemeente": "OMMEN", "bedrijventerrein": "BEERZERVELD" }, { "gemeente": "STEENWIJKERLAND", "bedrijventerrein": "KANAALWEG 2004" }, { "gemeente": "ALMELO", "bedrijventerrein": "BORNSESTRAAT" }, { "gemeente": "HOF VAN TWENTE", "bedrijventerrein": "DE ESCH RIJSSENSEWEG" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "ARDESCH" }, { "gemeente": "ALMELO", "bedrijventerrein": "DE GRENZEN" }, { "gemeente": "DALFSEN", "bedrijventerrein": "DEN HULST / DE EVENBOER" }, { "gemeente": "LOSSER", "bedrijventerrein": "DE LUTTE-ZUID" }, { "gemeente": "RAALTE", "bedrijventerrein": "HORDELMAN" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "DE KRIM I" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "BLOEMEWEIDE" }, { "gemeente": "ZWARTEWATERLAND", "bedrijventerrein": "ZEVENHONT OOST GENEMUIDEN" }, { "gemeente": "TUBBERGEN", "bedrijventerrein": "REUTUM" }, { "gemeente": "HAAKSBERGEN", "bedrijventerrein": "INDUSTRIE OOST" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "KROEZENHOEK WEST 2" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "ANKER KALKZANDSTEENFABRIEK" }, { "gemeente": "DINKELLAND", "bedrijventerrein": "BEDRIJVENTERREIN DENEKAMP" }, { "gemeente": "ENSCHEDE", "bedrijventerrein": "MARSSTEDEN" }, { "gemeente": "TWENTERAND", "bedrijventerrein": "VROOMSHOOP OOST UITBREIDING" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "REGGEWEG" }, { "gemeente": "DALFSEN", "bedrijventerrein": "T FEBRIEK" }, { "gemeente": "DEVENTER", "bedrijventerrein": "BLAUWENOORD" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "STERREMOLEN" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "PC STAMSTRAAT" }, { "gemeente": "RAALTE", "bedrijventerrein": "BROEKLAND" }, { "gemeente": "ZWOLLE", "bedrijventerrein": "VROLIJKHEID" }, { "gemeente": "WIERDEN", "bedrijventerrein": "BAANAKKERS III" }, { "gemeente": "HELLENDOORN", "bedrijventerrein": "T LOCHTER III" }, { "gemeente": "HARDENBERG", "bedrijventerrein": "HEEMSERPOORT 2" }, { "gemeente": "OMMEN", "bedrijventerrein": "DE ROTBRINK" } ];
Ext.define ("viewer.components.Bedrijventerreinen", {
    extend: "viewer.components.Component",
    bedrijventerrein: null,
    config:{
        title: null,
        titlebarIcon: null,
        tooltip: null,
        label: "",
        details: {
            minWidth: 700,
            minHeight: 400,
            useExtLayout: true,
        }
    },
    constructor: function (conf) {
        if(!Ext.isDefined(conf.showLabels)) conf.showLabels = true; 
        this.initConfig(conf);
		viewer.components.Bedrijventerreinen.superclass.constructor.call(this, this.config);
		this.loadWindow();
        return this;
    },
    loadWindow: function() {
        this.container = Ext.create('Ext.container.Container', {
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            padding: '5px',
            items: [
                this.createFilterContainer(),
                this.createForm()
            ]
        })
        this.getContentContainer().add(this.container);
    },
    updateSelection: function(bedrijventerrein) {
        this.bedrijventerrein = bedrijventerrein;
        this.form.removeAll();
        this.form.add([
            this.createAlgemeenForm(),
            this.createBereikbaarheidForm(),
            this.createOppervlakteForm()
        ]);
    },
    createForm: function() {
        this.form = Ext.create('Ext.tab.Panel', {
            flex: 1,
            items: [
                this.createAlgemeenForm(),
                this.createBereikbaarheidForm(),
                this.createOppervlakteForm()
            ]
        });
        return this.form;
    },
    createAlgemeenForm: function() {
        return Ext.create('Ext.form.Panel', {
            title: 'Algemeen en financieel',
            itemId: 'tab-algemeen',
            items: [
                this.createText("Kernnaam", this.bedrijventerrein ? this.bedrijventerrein.gemeente : ""),
                this.createCombo("Planfase", "Vastgesteld", [ "Vastgesteld" ]),
                this.createCombo("Terreinbeheerder", "Almelo", [ "Almelo" ])
            ]
        })
    },
    createBereikbaarheidForm: function() {
        return {
            title: 'Bereikbaarheid en herstructurering',
            html: 'Bereikbaarheid en herstructurering'
        };
    },
    createOppervlakteForm: function() {
        return {
            title: 'Oppervlakte',
            html: 'Oppervlakte'
        };
    },
    createFilterContainer: function() {
        var gemeentes = {};
        for(var i = 0; i < BEDRIJVENTERREINEN_DUMMY_DATA.length; i++) if (!gemeentes.hasOwnProperty(BEDRIJVENTERREINEN_DUMMY_DATA[i].gemeente)) gemeentes[BEDRIJVENTERREINEN_DUMMY_DATA[i].gemeente] = true;
        var gemeenteStore = Ext.create('Ext.data.Store', {
            data: Ext.Array.map(Object.keys(gemeentes).sort(), function(gemeente) { return { gemeente: gemeente }; }),
            queryMode: 'local'
        });
        var bedrijventerreinenStore = Ext.create('Ext.data.Store', {
            data: BEDRIJVENTERREINEN_DUMMY_DATA,
            queryMode: 'local',
            fields: [ 'gemeente', 'bedrijventerrein' ]
        });
        var container = Ext.create('Ext.container.Container', {
            width: '20%',
            minWidth: 200,
            padding: 10,
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            items: [
                {
                    xtype: 'combobox',
                    labelAlign: 'top',
                    fieldLabel: 'Gemeente',
                    store: gemeenteStore,
                    displayField: 'gemeente',
                    valueField: 'gemeente',
                    listeners: {
                        change: function(combo, value) {
                            bedrijventerreinenStore.clearFilter();
                            bedrijventerreinenStore.filter('gemeente', value);
                        }
                    }
                },
                {
                    xtype: 'combobox',
                    labelAlign: 'top',
                    fieldLabel: 'Peildatum',
                    store: [ "1 januari 2017",  "1 juli 2017",  "1 januari 2018",  "1 juli 2018",  "1 januari 2019",  "1 juli 2019",  "1 januari 2020",  "1 juli 2020" ]
                },
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    store: bedrijventerreinenStore,
                    columns: [
                        { text: 'Bedrijventerrein', dataIndex: 'bedrijventerrein', flex: 1 }
                    ],
                    header: false,
                    listeners: {
                        scope: this,
                        select: function(grid, record) {
                            this.updateSelection(record.getData());
                        }
                    }
                }
            ]
        });
        return container;
    },
    createText: function(label, value, opts) {
        return Ext.Object.merge({}, {
            xtype: 'textfield',
            fieldLabel: label,
            value: value
        }, opts);
    },
    createCombo: function(label, value, store, opts) {
        return Ext.Object.merge({}, {
            xtype: 'combobox',
            fieldLabel: label,
            value: value,
            store: store
        }, opts);
    },
    getExtComponents: function() {
        return [ this.container.getId() ];
    }
});