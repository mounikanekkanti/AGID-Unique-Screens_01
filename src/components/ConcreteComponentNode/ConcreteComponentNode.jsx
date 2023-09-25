/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon166 } from "../../icons/Icon166";
import { Icon175 } from "../../icons/Icon175";
import { Icon176 } from "../../icons/Icon176";
import { Icon2 } from "../../icons/Icon2";
import { Icon350 } from "../../icons/Icon350";
import { Icon353 } from "../../icons/Icon353";
import { Icon357 } from "../../icons/Icon357";
import { Icon359 } from "../../icons/Icon359";
import { Icon405 } from "../../icons/Icon405";
import { Icon63 } from "../../icons/Icon63";
import { Icon7 } from "../../icons/Icon7";
import { Icon81 } from "../../icons/Icon81";
import { Icon82 } from "../../icons/Icon82";
import { Icon86 } from "../../icons/Icon86";
import { IconAccessibilityNew } from "../../icons/IconAccessibilityNew";
import { IconAccessibleForward1 } from "../../icons/IconAccessibleForward1";
import { IconAccountBalance } from "../../icons/IconAccountBalance";
import { IconAccountBox } from "../../icons/IconAccountBox";
import { IconAccountCircle } from "../../icons/IconAccountCircle";
import { IconAdd } from "../../icons/IconAdd";
import { IconAddCircleOutline } from "../../icons/IconAddCircleOutline";
import { IconAlarm } from "../../icons/IconAlarm";
import { IconAlternateEmail } from "../../icons/IconAlternateEmail";
import { IconAnnouncement } from "../../icons/IconAnnouncement";
import { IconApi } from "../../icons/IconApi";
import { IconArrowBack } from "../../icons/IconArrowBack";
import { IconArrowDownward } from "../../icons/IconArrowDownward";
import { IconArrowDropUp } from "../../icons/IconArrowDropUp";
import { IconArrowForward } from "../../icons/IconArrowForward";
import { IconArrowUpward } from "../../icons/IconArrowUpward";
import { IconAssessment } from "../../icons/IconAssessment";
import { IconAttachFile } from "../../icons/IconAttachFile";
import { IconAttachMoney } from "../../icons/IconAttachMoney";
import { IconAutorenew } from "../../icons/IconAutorenew";
import { IconBackpack } from "../../icons/IconBackpack";
import { IconBathtub } from "../../icons/IconBathtub";
import { IconBedding } from "../../icons/IconBedding";
import { IconBookmark } from "../../icons/IconBookmark";
import { IconBugReport } from "../../icons/IconBugReport";
import { IconBuild } from "../../icons/IconBuild";
import { IconCalendarToday } from "../../icons/IconCalendarToday";
import { IconCampaign } from "../../icons/IconCampaign";
import { IconCamping } from "../../icons/IconCamping";
import { IconCancel } from "../../icons/IconCancel";
import { IconChat } from "../../icons/IconChat";
import { IconCheck } from "../../icons/IconCheck";
import { IconCheckCircle } from "../../icons/IconCheckCircle";
import { IconCheckCircleOutline } from "../../icons/IconCheckCircleOutline";
import { IconCheckroom } from "../../icons/IconCheckroom";
import { IconCleanHands } from "../../icons/IconCleanHands";
import { IconClose } from "../../icons/IconClose";
import { IconClosedCaption } from "../../icons/IconClosedCaption";
import { IconClothes } from "../../icons/IconClothes";
import { IconCloud } from "../../icons/IconCloud";
import { IconCode } from "../../icons/IconCode";
import { IconComment } from "../../icons/IconComment";
import { IconConnectWithoutContact } from "../../icons/IconConnectWithoutContact";
import { IconConstruction } from "../../icons/IconConstruction";
import { IconContactPage } from "../../icons/IconContactPage";
import { IconContentCopy } from "../../icons/IconContentCopy";
import { IconCoronavirus } from "../../icons/IconCoronavirus";
import { IconCreditCard } from "../../icons/IconCreditCard";
import { IconDeck } from "../../icons/IconDeck";
import { IconDelete } from "../../icons/IconDelete";
import { IconDeviceThermostat } from "../../icons/IconDeviceThermostat";
import { IconDirections } from "../../icons/IconDirections";
import { IconDirectionsBike } from "../../icons/IconDirectionsBike";
import { IconDirectionsBus } from "../../icons/IconDirectionsBus";
import { IconDirectionsCar } from "../../icons/IconDirectionsCar";
import { IconDirectionsWalk } from "../../icons/IconDirectionsWalk";
import { IconDoNotDisturb } from "../../icons/IconDoNotDisturb";
import { IconDoNotTouch } from "../../icons/IconDoNotTouch";
import { IconEco1 } from "../../icons/IconEco1";
import { IconEdit } from "../../icons/IconEdit";
import { IconElectricalServices } from "../../icons/IconElectricalServices";
import { IconEmojiEvents } from "../../icons/IconEmojiEvents";
import { IconError } from "../../icons/IconError";
import { IconErrorOutline } from "../../icons/IconErrorOutline";
import { IconEvent } from "../../icons/IconEvent";
import { IconFastForward } from "../../icons/IconFastForward";
import { IconFastRewind } from "../../icons/IconFastRewind";
import { IconFavorite } from "../../icons/IconFavorite";
import { IconFavoriteBorder } from "../../icons/IconFavoriteBorder";
import { IconFileDownload } from "../../icons/IconFileDownload";
import { IconFilePresent } from "../../icons/IconFilePresent";
import { IconFileUpload } from "../../icons/IconFileUpload";
import { IconFilterAlt } from "../../icons/IconFilterAlt";
import { IconFilterList } from "../../icons/IconFilterList";
import { IconFingerprint } from "../../icons/IconFingerprint";
import { IconFirstPage } from "../../icons/IconFirstPage";
import { IconFlag } from "../../icons/IconFlag";
import { IconFlickr } from "../../icons/IconFlickr";
import { IconFlight } from "../../icons/IconFlight";
import { IconFlooding } from "../../icons/IconFlooding";
import { IconFolder } from "../../icons/IconFolder";
import { IconFolderOpen } from "../../icons/IconFolderOpen";
import { IconFormatQuote } from "../../icons/IconFormatQuote";
import { IconFormatSize } from "../../icons/IconFormatSize";
import { IconForum } from "../../icons/IconForum";
import { IconGithub } from "../../icons/IconGithub";
import { IconGridView } from "../../icons/IconGridView";
import { IconGroupAdd } from "../../icons/IconGroupAdd";
import { IconGroups } from "../../icons/IconGroups";
import { IconHearing } from "../../icons/IconHearing";
import { IconHelp } from "../../icons/IconHelp";
import { IconHelpOutline } from "../../icons/IconHelpOutline";
import { IconHighlightOff } from "../../icons/IconHighlightOff";
import { IconHistory } from "../../icons/IconHistory";
import { IconHome } from "../../icons/IconHome";
import { IconHospital } from "../../icons/IconHospital";
import { IconHotel } from "../../icons/IconHotel";
import { IconHourglassEmpty } from "../../icons/IconHourglassEmpty";
import { IconHurricane } from "../../icons/IconHurricane";
import { IconIdentification } from "../../icons/IconIdentification";
import { IconImage } from "../../icons/IconImage";
import { IconInfoOutline } from "../../icons/IconInfoOutline";
import { IconInsights } from "../../icons/IconInsights";
import { IconInstagram } from "../../icons/IconInstagram";
import { IconKeyboard } from "../../icons/IconKeyboard";
import { IconLabel } from "../../icons/IconLabel";
import { IconLanguage } from "../../icons/IconLanguage";
import { IconLastPage } from "../../icons/IconLastPage";
import { IconLightbulb } from "../../icons/IconLightbulb";
import { IconLightbulbOutline } from "../../icons/IconLightbulbOutline";
import { IconLinegraph } from "../../icons/IconLinegraph";
import { IconLink } from "../../icons/IconLink";
import { IconLinkOff } from "../../icons/IconLinkOff";
import { IconList } from "../../icons/IconList";
import { IconLocalCafe } from "../../icons/IconLocalCafe";
import { IconLocalFireDepartment } from "../../icons/IconLocalFireDepartment";
import { IconLocalGasStation } from "../../icons/IconLocalGasStation";
import { IconLocalGroceryStore } from "../../icons/IconLocalGroceryStore";
import { IconLocalHospital } from "../../icons/IconLocalHospital";
import { IconLocalLaundryService } from "../../icons/IconLocalLaundryService";
import { IconLocalLibrary } from "../../icons/IconLocalLibrary";
import { IconLocalOffer } from "../../icons/IconLocalOffer";
import { IconLocalParking } from "../../icons/IconLocalParking";
import { IconLocalPharmacy } from "../../icons/IconLocalPharmacy";
import { IconLocalPolice } from "../../icons/IconLocalPolice";
import { IconLocalTaxi } from "../../icons/IconLocalTaxi";
import { IconLocationCity } from "../../icons/IconLocationCity";
import { IconLocationOn } from "../../icons/IconLocationOn";
import { IconLock } from "../../icons/IconLock";
import { IconLockOpen } from "../../icons/IconLockOpen";
import { IconLockOutline } from "../../icons/IconLockOutline";
import { IconLogin } from "../../icons/IconLogin";
import { IconLogout } from "../../icons/IconLogout";
import { IconLoop } from "../../icons/IconLoop";
import { IconMail } from "../../icons/IconMail";
import { IconMailOutline } from "../../icons/IconMailOutline";
import { IconMasks } from "../../icons/IconMasks";
import { IconMedicalServices } from "../../icons/IconMedicalServices";
import { IconMilitaryTech } from "../../icons/IconMilitaryTech";
import { IconMoreHoriz } from "../../icons/IconMoreHoriz";
import { IconMoreVert } from "../../icons/IconMoreVert";
import { IconMyLocation } from "../../icons/IconMyLocation";
import { IconNavigateBefore } from "../../icons/IconNavigateBefore";
import { IconNavigateFarBefore } from "../../icons/IconNavigateFarBefore";
import { IconNavigateFarNext } from "../../icons/IconNavigateFarNext";
import { IconNearMe } from "../../icons/IconNearMe";
import { IconNotifications } from "../../icons/IconNotifications";
import { IconNotificationsActive } from "../../icons/IconNotificationsActive";
import { IconNotificationsNone } from "../../icons/IconNotificationsNone";
import { IconNotificationsOff } from "../../icons/IconNotificationsOff";
import { IconPark } from "../../icons/IconPark";
import { IconPeople } from "../../icons/IconPeople";
import { IconPerson } from "../../icons/IconPerson";
import { IconPets } from "../../icons/IconPets";
import { IconPhone } from "../../icons/IconPhone";
import { IconPhotoCamera } from "../../icons/IconPhotoCamera";
import { IconPiechart } from "../../icons/IconPiechart";
import { IconPriorityHigh } from "../../icons/IconPriorityHigh";
import { IconPublic } from "../../icons/IconPublic";
import { IconPushPin } from "../../icons/IconPushPin";
import { IconRadioButtonUnchecked } from "../../icons/IconRadioButtonUnchecked";
import { IconRain } from "../../icons/IconRain";
import { IconReduceCapacity } from "../../icons/IconReduceCapacity";
import { IconReport } from "../../icons/IconReport";
import { IconRestaurant } from "../../icons/IconRestaurant";
import { IconSafetyDivider } from "../../icons/IconSafetyDivider";
import { IconSanitizer } from "../../icons/IconSanitizer";
import { IconSchedule } from "../../icons/IconSchedule";
import { IconSchool } from "../../icons/IconSchool";
import { IconScience1 } from "../../icons/IconScience1";
import { IconSecurity } from "../../icons/IconSecurity";
import { IconSend } from "../../icons/IconSend";
import { IconSentimentDissatisfied } from "../../icons/IconSentimentDissatisfied";
import { IconSentimentNeutral } from "../../icons/IconSentimentNeutral";
import { IconSentimentSatisfied } from "../../icons/IconSentimentSatisfied";
import { IconSentimentSatisfiedAlt } from "../../icons/IconSentimentSatisfiedAlt";
import { IconSentimentVeryDissatisfied } from "../../icons/IconSentimentVeryDissatisfied";
import { IconSettings } from "../../icons/IconSettings";
import { IconSevereWeather1 } from "../../icons/IconSevereWeather1";
import { IconShare } from "../../icons/IconShare";
import { IconShield } from "../../icons/IconShield";
import { IconShoppingBasket } from "../../icons/IconShoppingBasket";
import { IconSnow } from "../../icons/IconSnow";
import { IconSoap } from "../../icons/IconSoap";
import { IconSocialDistance } from "../../icons/IconSocialDistance";
import { IconSortArrow } from "../../icons/IconSortArrow";
import { IconSpellcheck } from "../../icons/IconSpellcheck";
import { IconStar } from "../../icons/IconStar";
import { IconStarHalf } from "../../icons/IconStarHalf";
import { IconStarOutline } from "../../icons/IconStarOutline";
import { IconStore } from "../../icons/IconStore";
import { IconSubtract } from "../../icons/IconSubtract";
import { IconSupport } from "../../icons/IconSupport";
import { IconSupportAgent } from "../../icons/IconSupportAgent";
import { IconTextFields } from "../../icons/IconTextFields";
import { IconThumbDownOffAlt } from "../../icons/IconThumbDownOffAlt";
import { IconThumbUpAlt } from "../../icons/IconThumbUpAlt";
import { IconTimer } from "../../icons/IconTimer";
import { IconToggleOff } from "../../icons/IconToggleOff";
import { IconToggleOn } from "../../icons/IconToggleOn";
import { IconTools } from "../../icons/IconTools";
import { IconTopic } from "../../icons/IconTopic";
import { IconTornado } from "../../icons/IconTornado";
import { IconTranslate } from "../../icons/IconTranslate";
import { IconTrendingDown } from "../../icons/IconTrendingDown";
import { IconTrendingUp } from "../../icons/IconTrendingUp";
import { IconTwitter } from "../../icons/IconTwitter";
import { IconUndo } from "../../icons/IconUndo";
import { IconUnfoldLess } from "../../icons/IconUnfoldLess";
import { IconUnfoldMore } from "../../icons/IconUnfoldMore";
import { IconUpdate } from "../../icons/IconUpdate";
import { IconUploadFile } from "../../icons/IconUploadFile";
import { IconVerified } from "../../icons/IconVerified";
import { IconVerifiedUser } from "../../icons/IconVerifiedUser";
import { IconVisibility } from "../../icons/IconVisibility";
import { IconVolumeOff } from "../../icons/IconVolumeOff";
import { IconWarning } from "../../icons/IconWarning";
import { IconWash } from "../../icons/IconWash";
import { IconWifi } from "../../icons/IconWifi";
import { IconWork } from "../../icons/IconWork";
import { IconYoutube } from "../../icons/IconYoutube";
import { IconZoomIn } from "../../icons/IconZoomIn";
import { IconZoomOut } from "../../icons/IconZoomOut";
import { IconZoomOutMap } from "../../icons/IconZoomOutMap";
import "./style.css";

export const ConcreteComponentNode = ({ icon }) => {
  return (
    <>
      {icon === "accessibility-new" && <IconAccessibilityNew className="concrete-component-node" />}

      {icon === "accessible-forward" && <IconAccessibleForward1 className="concrete-component-node" />}

      {icon === "account-balance" && <IconAccountBalance className="concrete-component-node" />}

      {icon === "account-box" && <IconAccountBox className="concrete-component-node" />}

      {icon === "account-circle" && <IconAccountCircle className="concrete-component-node" />}

      {["add-circle-outline", "add-circle"].includes(icon) && (
        <IconAddCircleOutline className="concrete-component-node" />
      )}

      {icon === "add" && <IconAdd className="concrete-component-node" />}

      {["remove", "subtract"].includes(icon) && <IconSubtract className="concrete-component-node" />}

      {icon === "alarm" && <IconAlarm className="concrete-component-node" />}

      {icon === "alternate-email" && <IconAlternateEmail className="concrete-component-node" />}

      {icon === "announcement" && <IconAnnouncement className="concrete-component-node" />}

      {icon === "api" && <IconApi className="concrete-component-node" />}

      {icon === "arrow-back" && <IconArrowBack className="concrete-component-node" color="black" />}

      {icon === "arrow-downward" && <IconArrowDownward className="concrete-component-node" color="black" />}

      {icon === "arrow-drop-down" && <Icon353 className="concrete-component-node" color="black" />}

      {icon === "arrow-drop-up" && <IconArrowDropUp className="concrete-component-node" color="black" />}

      {icon === "arrow-forward" && <IconArrowForward className="concrete-component-node" color="black" />}

      {icon === "arrow-upward" && <IconArrowUpward className="concrete-component-node" color="black" />}

      {icon === "assessment" && <IconAssessment className="concrete-component-node" color="black" />}

      {icon === "attach-file" && <IconAttachFile className="concrete-component-node" />}

      {icon === "attach-money" && <IconAttachMoney className="concrete-component-node" />}

      {icon === "autorenew" && <IconAutorenew className="concrete-component-node" />}

      {icon === "backpack" && <IconBackpack className="concrete-component-node" />}

      {icon === "bathtub" && <IconBathtub className="concrete-component-node" />}

      {icon === "bedding" && <IconBedding className="concrete-component-node" />}

      {icon === "bookmark" && <IconBookmark className="concrete-component-node" />}

      {icon === "bug-report" && <IconBugReport className="concrete-component-node" />}

      {icon === "build" && <IconBuild className="concrete-component-node" />}

      {icon === "calendar-today" && <IconCalendarToday className="concrete-component-node" />}

      {icon === "campaign" && <IconCampaign className="concrete-component-node" />}

      {icon === "camping" && <IconCamping className="concrete-component-node" />}

      {icon === "cancel" && <IconCancel className="concrete-component-node" />}

      {icon === "chat" && <IconChat className="concrete-component-node" />}

      {icon === "check-circle-outline" && <IconCheckCircleOutline className="concrete-component-node" />}

      {icon === "check-circle" && <IconCheckCircle className="concrete-component-node" />}

      {icon === "check" && <IconCheck className="concrete-component-node" />}

      {icon === "checkroom" && <IconCheckroom className="concrete-component-node" />}

      {icon === "clean-hands" && <IconCleanHands className="concrete-component-node" />}

      {icon === "close" && <IconClose className="concrete-component-node" />}

      {icon === "closed-caption" && <IconClosedCaption className="concrete-component-node" />}

      {icon === "clothes" && <IconClothes className="concrete-component-node" />}

      {icon === "cloud" && <IconCloud className="concrete-component-node" />}

      {icon === "code" && <IconCode className="concrete-component-node" />}

      {icon === "comment" && <IconComment className="concrete-component-node" />}

      {icon === "connect-without-contact" && <IconConnectWithoutContact className="concrete-component-node" />}

      {icon === "construction" && <IconConstruction className="concrete-component-node" />}

      {icon === "contact-page" && <IconContactPage className="concrete-component-node" />}

      {icon === "content-copy" && <IconContentCopy className="concrete-component-node" />}

      {icon === "coronavirus" && <IconCoronavirus className="concrete-component-node" />}

      {icon === "credit-card" && <IconCreditCard className="concrete-component-node" />}

      {icon === "deck" && <IconDeck className="concrete-component-node" />}

      {icon === "delete" && <IconDelete className="concrete-component-node" />}

      {icon === "device-thermostat" && <IconDeviceThermostat className="concrete-component-node" />}

      {icon === "directions-bike" && <IconDirectionsBike className="concrete-component-node" />}

      {icon === "directions-bus" && <IconDirectionsBus className="concrete-component-node" />}

      {icon === "directions-car" && <IconDirectionsCar className="concrete-component-node" />}

      {icon === "directions-walk" && <IconDirectionsWalk className="concrete-component-node" />}

      {icon === "directions" && <IconDirections className="concrete-component-node" />}

      {icon === "do-not-disturb" && <IconDoNotDisturb className="concrete-component-node" />}

      {icon === "do-not-touch" && <IconDoNotTouch className="concrete-component-node" />}

      {icon === "drag-handle" && <Icon63 className="concrete-component-node" color="black" />}

      {icon === "eco" && <IconEco1 className="concrete-component-node" />}

      {icon === "edit" && <IconEdit className="concrete-component-node" />}

      {icon === "electrical-services" && <IconElectricalServices className="concrete-component-node" />}

      {icon === "emoji-events" && <IconEmojiEvents className="concrete-component-node" />}

      {icon === "error-outline" && <IconErrorOutline className="concrete-component-node" />}

      {icon === "error" && <IconError className="concrete-component-node" />}

      {icon === "event" && <IconEvent className="concrete-component-node" />}

      {icon === "expand-less" && <Icon2 className="concrete-component-node" color="black" />}

      {icon === "expand-more" && <Icon350 className="concrete-component-node" color="black" />}

      {icon === "facebook" && <Icon82 className="concrete-component-node" />}

      {icon === "fast-forward" && <IconFastForward className="concrete-component-node" />}

      {icon === "fast-rewind" && <IconFastRewind className="concrete-component-node" />}

      {icon === "favorite-border" && <IconFavoriteBorder className="concrete-component-node" />}

      {icon === "favorite" && <IconFavorite className="concrete-component-node" />}

      {icon === "file-download" && <IconFileDownload className="concrete-component-node" />}

      {icon === "file-present" && <IconFilePresent className="concrete-component-node" />}

      {icon === "file-upload" && <IconFileUpload className="concrete-component-node" />}

      {icon === "filter-alt" && <IconFilterAlt className="concrete-component-node" />}

      {icon === "filter-list" && <IconFilterList className="concrete-component-node" />}

      {icon === "fingerprint" && <IconFingerprint className="concrete-component-node" />}

      {icon === "first-page" && <IconFirstPage className="concrete-component-node" />}

      {icon === "flag" && <IconFlag className="concrete-component-node" />}

      {icon === "flickr" && <IconFlickr className="concrete-component-node" />}

      {icon === "flight" && <IconFlight className="concrete-component-node" />}

      {icon === "flooding" && <IconFlooding className="concrete-component-node" />}

      {icon === "folder-open" && <IconFolderOpen className="concrete-component-node" />}

      {icon === "folder" && <IconFolder className="concrete-component-node" />}

      {icon === "format-quote" && <IconFormatQuote className="concrete-component-node" />}

      {icon === "format-size" && <IconFormatSize className="concrete-component-node" />}

      {icon === "forum" && <IconForum className="concrete-component-node" />}

      {icon === "github" && <IconGithub className="concrete-component-node" />}

      {icon === "grid-view" && <IconGridView className="concrete-component-node" />}

      {icon === "group-add" && <IconGroupAdd className="concrete-component-node" />}

      {icon === "groups" && <IconGroups className="concrete-component-node" />}

      {icon === "hearing" && <IconHearing className="concrete-component-node" />}

      {icon === "help-outline" && <IconHelpOutline className="concrete-component-node" />}

      {icon === "help" && <IconHelp className="concrete-component-node" />}

      {icon === "highlight-off" && <IconHighlightOff className="concrete-component-node" />}

      {icon === "history" && <IconHistory className="concrete-component-node" />}

      {icon === "home" && <IconHome className="concrete-component-node" />}

      {icon === "hospital" && <IconHospital className="concrete-component-node" />}

      {icon === "hotel" && <IconHotel className="concrete-component-node" />}

      {icon === "hourglass-empty" && <IconHourglassEmpty className="concrete-component-node" />}

      {icon === "hurricane" && <IconHurricane className="concrete-component-node" />}

      {icon === "identification" && <IconIdentification className="concrete-component-node" />}

      {icon === "image" && <IconImage className="concrete-component-node" />}

      {icon === "info-outline" && <IconInfoOutline className="concrete-component-node" />}

      {icon === "info" && <Icon359 className="concrete-component-node" color="black" />}

      {icon === "insights" && <IconInsights className="concrete-component-node" />}

      {icon === "linegraph" && <IconLinegraph className="concrete-component-node" color="black" />}

      {icon === "instagram" && <IconInstagram className="concrete-component-node" />}

      {icon === "keyboard" && <IconKeyboard className="concrete-component-node" />}

      {icon === "label" && <IconLabel className="concrete-component-node" />}

      {icon === "language" && <IconLanguage className="concrete-component-node" />}

      {icon === "last-page" && <IconLastPage className="concrete-component-node" />}

      {icon === "lightbulb-outline" && <IconLightbulbOutline className="concrete-component-node" />}

      {icon === "lightbulb" && <IconLightbulb className="concrete-component-node" />}

      {icon === "link-off" && <IconLinkOff className="concrete-component-node" />}

      {icon === "link" && <IconLink className="concrete-component-node" />}

      {icon === "list" && <IconList className="concrete-component-node" />}

      {icon === "local-cafe" && <IconLocalCafe className="concrete-component-node" />}

      {icon === "local-fire-department" && <IconLocalFireDepartment className="concrete-component-node" />}

      {icon === "local-gas-station" && <IconLocalGasStation className="concrete-component-node" />}

      {icon === "local-grocery-store" && <IconLocalGroceryStore className="concrete-component-node" />}

      {icon === "local-hospital" && <IconLocalHospital className="concrete-component-node" />}

      {icon === "local-laundry-service" && <IconLocalLaundryService className="concrete-component-node" />}

      {icon === "local-library" && <IconLocalLibrary className="concrete-component-node" />}

      {icon === "local-offer" && <IconLocalOffer className="concrete-component-node" />}

      {icon === "local-parking" && <IconLocalParking className="concrete-component-node" />}

      {icon === "local-pharmacy" && <IconLocalPharmacy className="concrete-component-node" />}

      {icon === "local-police" && <IconLocalPolice className="concrete-component-node" />}

      {icon === "local-taxi" && <IconLocalTaxi className="concrete-component-node" />}

      {icon === "location-city" && <IconLocationCity className="concrete-component-node" />}

      {icon === "location-on" && <IconLocationOn className="concrete-component-node" />}

      {icon === "navigate-far-next" && <IconNavigateFarNext className="concrete-component-node" />}

      {icon === "navigate-far-before" && <IconNavigateFarBefore className="concrete-component-node" />}

      {icon === "lock-open" && <IconLockOpen className="concrete-component-node" />}

      {icon === "lock-outline" && <IconLockOutline className="concrete-component-node" />}

      {icon === "lock" && <IconLock className="concrete-component-node" />}

      {icon === "login" && <IconLogin className="concrete-component-node" />}

      {icon === "logout" && <IconLogout className="concrete-component-node" />}

      {icon === "loop" && <IconLoop className="concrete-component-node" />}

      {icon === "mail-outline" && <IconMailOutline className="concrete-component-node" />}

      {icon === "mail" && <IconMail className="concrete-component-node" />}

      {icon === "map" && <Icon166 className="concrete-component-node" color="black" />}

      {icon === "masks" && <IconMasks className="concrete-component-node" />}

      {icon === "medical-services" && <IconMedicalServices className="concrete-component-node" />}

      {icon === "menu" && <img className="concrete-component-node" alt="Icon menu" src="/img/icon-menu.png" />}

      {icon === "military-tech" && <IconMilitaryTech className="concrete-component-node" />}

      {icon === "more-vert" && <IconMoreVert className="concrete-component-node" />}

      {icon === "my-location" && <IconMyLocation className="concrete-component-node" />}

      {icon === "near-me" && <IconNearMe className="concrete-component-node" />}

      {icon === "notifications-active" && <IconNotificationsActive className="concrete-component-node" />}

      {icon === "notifications-none" && <IconNotificationsNone className="concrete-component-node" />}

      {icon === "notifications-off" && <IconNotificationsOff className="concrete-component-node" />}

      {icon === "notifications" && <IconNotifications className="concrete-component-node" />}

      {icon === "more-horiz" && <IconMoreHoriz className="concrete-component-node" />}

      {icon === "navigate-before" && <IconNavigateBefore className="concrete-component-node" />}

      {icon === "navigate-next" && <Icon86 className="concrete-component-node" />}

      {icon === "park" && <IconPark className="concrete-component-node" />}

      {icon === "people" && <IconPeople className="concrete-component-node" />}

      {icon === "person" && <IconPerson className="concrete-component-node" />}

      {icon === "pets" && <IconPets className="concrete-component-node" />}

      {icon === "phone" && <IconPhone className="concrete-component-node" />}

      {icon === "photo-camera" && <IconPhotoCamera className="concrete-component-node" />}

      {icon === "popout" && <Icon7 className="concrete-component-node" color="black" />}

      {icon === "print" && <Icon175 className="concrete-component-node" color="black" />}

      {icon === "priority-high" && <IconPriorityHigh className="concrete-component-node" />}

      {icon === "public" && <IconPublic className="concrete-component-node" />}

      {icon === "push-pin" && <IconPushPin className="concrete-component-node" color="black" />}

      {icon === "radio-button-unchecked" && <IconRadioButtonUnchecked className="concrete-component-node" />}

      {icon === "rain" && <IconRain className="concrete-component-node" />}

      {icon === "reduce-capacity" && <IconReduceCapacity className="concrete-component-node" />}

      {icon === "report" && <IconReport className="concrete-component-node" />}

      {icon === "restaurant" && <IconRestaurant className="concrete-component-node" />}

      {icon === "rss-feed" && <Icon81 className="concrete-component-node" />}

      {icon === "safety-divider" && <IconSafetyDivider className="concrete-component-node" />}

      {icon === "sanitizer" && <IconSanitizer className="concrete-component-node" />}

      {icon === "save-alt" && <Icon176 className="concrete-component-node" color="black" />}

      {icon === "schedule" && <IconSchedule className="concrete-component-node" />}

      {icon === "pie-chart" && <IconPiechart className="concrete-component-node" />}

      {icon === "school" && <IconSchool className="concrete-component-node" />}

      {icon === "science" && <IconScience1 className="concrete-component-node" />}

      {icon === "search" && <Icon405 className="concrete-component-node" color="black" />}

      {icon === "security" && <IconSecurity className="concrete-component-node" />}

      {icon === "send" && <IconSend className="concrete-component-node" />}

      {icon === "sentiment-dissatisfied" && <IconSentimentDissatisfied className="concrete-component-node" />}

      {icon === "sentiment-neutral" && <IconSentimentNeutral className="concrete-component-node" />}

      {icon === "sentiment-satisfied-alt" && <IconSentimentSatisfiedAlt className="concrete-component-node" />}

      {icon === "sentiment-satisfied" && <IconSentimentSatisfied className="concrete-component-node" />}

      {icon === "sentiment-very-dissatisfied" && <IconSentimentVeryDissatisfied className="concrete-component-node" />}

      {icon === "settings" && <IconSettings className="concrete-component-node" />}

      {icon === "severe-weather" && <IconSevereWeather1 className="concrete-component-node" />}

      {icon === "share" && <IconShare className="concrete-component-node" color="black" />}

      {icon === "shield" && <IconShield className="concrete-component-node" />}

      {icon === "shopping-basket" && <IconShoppingBasket className="concrete-component-node" />}

      {icon === "snow" && <IconSnow className="concrete-component-node" />}

      {icon === "soap" && <IconSoap className="concrete-component-node" />}

      {icon === "social-distance" && <IconSocialDistance className="concrete-component-node" />}

      {icon === "sort-arrow" && <IconSortArrow className="concrete-component-node" />}

      {icon === "spellcheck" && <IconSpellcheck className="concrete-component-node" />}

      {icon === "star-half" && <IconStarHalf className="concrete-component-node" />}

      {icon === "star-outline" && <IconStarOutline className="concrete-component-node" />}

      {icon === "star" && <IconStar className="concrete-component-node" />}

      {icon === "store" && <IconStore className="concrete-component-node" />}

      {icon === "support-agent" && <IconSupportAgent className="concrete-component-node" />}

      {icon === "support" && <IconSupport className="concrete-component-node" />}

      {icon === "text-fields" && <IconTextFields className="concrete-component-node" />}

      {icon === "thumb-down-off-alt" && <IconThumbDownOffAlt className="concrete-component-node" />}

      {icon === "thumb-up-alt" && <IconThumbUpAlt className="concrete-component-node" />}

      {icon === "timer" && <IconTimer className="concrete-component-node" />}

      {icon === "toggle-off" && <IconToggleOff className="concrete-component-node" />}

      {icon === "toggle-on" && <IconToggleOn className="concrete-component-node" />}

      {icon === "topic" && <IconTopic className="concrete-component-node" />}

      {icon === "tornado" && <IconTornado className="concrete-component-node" />}

      {icon === "translate" && <IconTranslate className="concrete-component-node" />}

      {icon === "trending-down" && <IconTrendingDown className="concrete-component-node" />}

      {icon === "trending-up" && <IconTrendingUp className="concrete-component-node" />}

      {icon === "twitter" && <IconTwitter className="concrete-component-node" />}

      {icon === "undo" && <IconUndo className="concrete-component-node" />}

      {icon === "unfold-less" && <IconUnfoldLess className="concrete-component-node" />}

      {icon === "unfold-more" && <IconUnfoldMore className="concrete-component-node" />}

      {icon === "update" && <IconUpdate className="concrete-component-node" />}

      {icon === "upload-file" && <IconUploadFile className="concrete-component-node" />}

      {icon === "verified-user" && <IconVerifiedUser className="concrete-component-node" />}

      {icon === "verified" && <IconVerified className="concrete-component-node" />}

      {icon === "visibility-off" && <Icon357 className="concrete-component-node" color="black" />}

      {icon === "visibility" && <IconVisibility className="concrete-component-node" />}

      {icon === "volume-off" && <IconVolumeOff className="concrete-component-node" />}

      {icon === "warning" && <IconWarning className="concrete-component-node" />}

      {icon === "wash" && <IconWash className="concrete-component-node" />}

      {icon === "wifi" && <IconWifi className="concrete-component-node" />}

      {icon === "work" && <IconWork className="concrete-component-node" />}

      {icon === "youtube" && <IconYoutube className="concrete-component-node" />}

      {icon === "zoom-in" && <IconZoomIn className="concrete-component-node" />}

      {icon === "zoom-out-map" && <IconZoomOutMap className="concrete-component-node" />}

      {icon === "zoom-out" && <IconZoomOut className="concrete-component-node" />}

      {icon === "tools" && <IconTools className="concrete-component-node" />}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  icon: PropTypes.oneOf([
    "facebook",
    "hurricane",
    "linegraph",
    "loop",
    "check-circle",
    "cloud",
    "local-offer",
    "restaurant",
    "eco",
    "medical-services",
    "coronavirus",
    "map",
    "calendar-today",
    "share",
    "tools",
    "sentiment-dissatisfied",
    "clean-hands",
    "remove",
    "my-location",
    "thumb-down-off-alt",
    "push-pin",
    "warning",
    "chat",
    "identification",
    "directions-bus",
    "highlight-off",
    "verified",
    "connect-without-contact",
    "wash",
    "insights",
    "arrow-forward",
    "undo",
    "people",
    "local-cafe",
    "arrow-drop-up",
    "campaign",
    "assessment",
    "radio-button-unchecked",
    "closed-caption",
    "near-me",
    "photo-camera",
    "grid-view",
    "public",
    "notifications-none",
    "lock-outline",
    "content-copy",
    "subtract",
    "lock",
    "logout",
    "groups",
    "navigate-far-next",
    "flight",
    "fast-rewind",
    "zoom-out-map",
    "code",
    "login",
    "credit-card",
    "last-page",
    "first-page",
    "checkroom",
    "arrow-upward",
    "filter-list",
    "build",
    "construction",
    "github",
    "star-half",
    "do-not-disturb",
    "support-agent",
    "directions-walk",
    "print",
    "emoji-events",
    "announcement",
    "add-circle-outline",
    "sentiment-satisfied",
    "cancel",
    "local-laundry-service",
    "do-not-touch",
    "arrow-back",
    "fingerprint",
    "search",
    "priority-high",
    "lightbulb",
    "wifi",
    "unfold-more",
    "device-thermostat",
    "backpack",
    "local-taxi",
    "more-horiz",
    "location-city",
    "arrow-drop-down",
    "folder",
    "history",
    "comment",
    "sanitizer",
    "lightbulb-outline",
    "filter-alt",
    "star-outline",
    "popout",
    "file-present",
    "upload-file",
    "safety-divider",
    "error-outline",
    "account-balance",
    "help",
    "volume-off",
    "check-circle-outline",
    "edit",
    "hearing",
    "expand-less",
    "image",
    "pets",
    "settings",
    "file-download",
    "visibility-off",
    "severe-weather",
    "zoom-out",
    "support",
    "local-fire-department",
    "deck",
    "info",
    "twitter",
    "reduce-capacity",
    "visibility",
    "tornado",
    "save-alt",
    "mail-outline",
    "rss-feed",
    "fast-forward",
    "toggle-on",
    "report",
    "translate",
    "list",
    "link",
    "person",
    "school",
    "sort-arrow",
    "spellcheck",
    "thumb-up-alt",
    "flag",
    "electrical-services",
    "send",
    "forum",
    "close",
    "local-pharmacy",
    "hourglass-empty",
    "unfold-less",
    "timer",
    "account-box",
    "error",
    "keyboard",
    "link-off",
    "update",
    "youtube",
    "alternate-email",
    "home",
    "local-police",
    "menu",
    "verified-user",
    "masks",
    "flooding",
    "topic",
    "expand-more",
    "flickr",
    "text-fields",
    "camping",
    "help-outline",
    "schedule",
    "trending-up",
    "info-outline",
    "soap",
    "arrow-downward",
    "hospital",
    "store",
    "attach-file",
    "directions",
    "local-library",
    "notifications-active",
    "bedding",
    "delete",
    "contact-page",
    "local-hospital",
    "phone",
    "trending-down",
    "autorenew",
    "directions-car",
    "group-add",
    "file-upload",
    "label",
    "bathtub",
    "navigate-before",
    "event",
    "social-distance",
    "attach-money",
    "clothes",
    "format-size",
    "park",
    "more-vert",
    "sentiment-neutral",
    "location-on",
    "shopping-basket",
    "bookmark",
    "military-tech",
    "hotel",
    "pie-chart",
    "sentiment-satisfied-alt",
    "bug-report",
    "mail",
    "add-circle",
    "navigate-next",
    "sentiment-very-dissatisfied",
    "directions-bike",
    "favorite-border",
    "language",
    "favorite",
    "navigate-far-before",
    "api",
    "account-circle",
    "star",
    "local-grocery-store",
    "accessibility-new",
    "science",
    "format-quote",
    "rain",
    "shield",
    "toggle-off",
    "add",
    "alarm",
    "drag-handle",
    "local-gas-station",
    "security",
    "snow",
    "zoom-in",
    "notifications",
    "accessible-forward",
    "work",
    "lock-open",
    "instagram",
    "local-parking",
    "folder-open",
    "notifications-off",
    "check",
  ]),
};
