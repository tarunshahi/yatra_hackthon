(function(window,angular){
	'use strict';
	var jsonService = angular.module("JsonProvider",[]);

	jsonService.factory("jsonServiceProvider",["$q","$http",function($q,$http){
		var holidayList = {"Domestic_Packages":[{"destination":"Andaman","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1448342736/Nice_sunset_Andaman.jpg","altText":""},"noOfPkgs":31,"minPrice":17249.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Andaman","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Andaman","country":null,"availableFrom":"Mar","availableTo":"Mar"},{"destination":"Kerala","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1449141580/Kerala_Group.jpg","altText":""},"noOfPkgs":165,"minPrice":5500.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Kerala","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Kerala","country":"India","availableFrom":"Feb","availableTo":"Feb"},{"destination":"Himachal Pradesh","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420604686/Domestic Holidays/Domestic Holidays 2/Himachal-Pradesh-.jpg","altText":""},"noOfPkgs":110,"minPrice":5000.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Himachal Pradesh","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Himachal Pradesh","country":"India","availableFrom":"Feb","availableTo":"Mar"},{"destination":"Uttar Pradesh","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1422431904/Domestic Holidays/Domestic Holidays 2/UP.jpg","altText":""},"noOfPkgs":45,"minPrice":3250.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Uttar Pradesh","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Uttar Pradesh","country":"India","availableFrom":"Feb","availableTo":"Feb"},{"destination":"Sri Lanka","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1478583166/Colombo_Seema_Malaka_Temple.jpg","altText":"Sri Lanka"},"noOfPkgs":61,"minPrice":23500.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Sri Lanka","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Sri Lanka","country":"","availableFrom":"Mar","availableTo":"Dec"},{"destination":"New Delhi","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1433488090/Haridwar_36.jpg","altText":"New Delhi"},"noOfPkgs":127,"minPrice":5190.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=New Delhi","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=New Delhi","country":"India","availableFrom":"Feb","availableTo":"Mar"},{"destination":"Rajasthan","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1439894870/Jaipur_205.jpg","altText":""},"noOfPkgs":143,"minPrice":6999.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Rajasthan","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Rajasthan","country":"India","availableFrom":"Feb","availableTo":"Feb"},{"destination":"Ladakh","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1448957567/Domestic Holidays/Group Tour Imagery/Ladakh.jpg","altText":""},"noOfPkgs":33,"minPrice":13100.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Ladakh","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Ladakh","country":"India","availableFrom":"Feb","availableTo":"Dec"},{"destination":"Puri","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1434961711/Puri_beach.jpg","altText":"Puri"},"noOfPkgs":10,"minPrice":6900.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Puri","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Puri","country":"India","availableFrom":"Feb","availableTo":"Dec"},{"destination":"Assam","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1448957568/Domestic Holidays/Group Tour Imagery/Assam.jpg","altText":""},"noOfPkgs":26,"minPrice":8350.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Assam","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Assam","country":"India","availableFrom":"Feb","availableTo":"Dec"},{"destination":"Uttarakhand","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1449725234/Tungnath_111.jpg","altText":""},"noOfPkgs":33,"minPrice":5190.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Uttarakhand","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Uttarakhand","country":"India","availableFrom":"Feb","availableTo":"Mar"},{"destination":"Bhutan","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420538190/Domestic Holidays/Domestic Holidays 2/Bhutan.jpg","altText":""},"noOfPkgs":19,"minPrice":18400.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Bhutan","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Bhutan","country":"","availableFrom":"Mar","availableTo":"Dec"},{"destination":"Sikkim","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1449725175/Yak_at_Tsangmo_Lake.jpg","altText":""},"noOfPkgs":44,"minPrice":9099.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Sikkim","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Sikkim","country":"India","availableFrom":"Feb","availableTo":"Dec"},{"destination":"Jammu and Kashmir","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420604686/Domestic Holidays/Domestic Holidays 2/Jammu-and-Kashmir.jpg","altText":""},"noOfPkgs":102,"minPrice":8900.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Jammu and Kashmir","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Jammu and Kashmir","country":"India","availableFrom":"Feb","availableTo":"Mar"},{"destination":"West Bengal","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1464783575/Gangtok_Activities_Climb_the_Summit.jpg","altText":"West Bengal"},"noOfPkgs":36,"minPrice":9099.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=West Bengal","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=West Bengal","country":"India","availableFrom":"Feb","availableTo":"Sep"},{"destination":"Tamil Nadu","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1473672330/Yercaud_Best_Time.jpg","altText":"Tamil Nadu"},"noOfPkgs":93,"minPrice":5800.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Tamil Nadu","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Tamil Nadu","country":"India","availableFrom":"Feb","availableTo":"Jan"},{"destination":"Goa","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1436339010/Goa_125.jpg","altText":""},"noOfPkgs":37,"minPrice":5999.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Goa","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Goa","country":"India","availableFrom":"Feb","availableTo":"Mar"},{"destination":"Maharashtra","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1449725175/Nagpur_Maharashtra.jpg","altText":""},"noOfPkgs":14,"minPrice":7350.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Maharashtra","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Maharashtra","country":"India","availableFrom":"Feb","availableTo":"Dec"},{"destination":"Nepal","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420545756/Domestic Holidays/Domestic Holidays 2/Nepal.jpg","altText":""},"noOfPkgs":36,"minPrice":5749.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Nepal","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Nepal","country":"","availableFrom":"Feb","availableTo":"Sep"},{"destination":"Karnataka","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420538195/Domestic Holidays/Domestic Holidays 2/Karnataka.jpg","altText":""},"noOfPkgs":53,"minPrice":7000.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Karnataka","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Karnataka","country":"India","availableFrom":"Feb","availableTo":"Sep"},{"destination":"Meghalaya","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1448957571/Domestic Holidays/Group Tour Imagery/Meghalaya.jpg","altText":""},"noOfPkgs":21,"minPrice":8350.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Meghalaya","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Meghalaya","country":"India","availableFrom":"Feb","availableTo":"Dec"},{"destination":"Mararikulam","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420721168/Domestic Holidays/Domestic Holidays 2/Mararikulam.jpg","altText":""},"noOfPkgs":3,"minPrice":9999.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Mararikulam","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Mararikulam","country":"India","availableFrom":"Mar","availableTo":"Sep"},{"destination":"Tirupati","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1433836400/Munnar_12.jpg","altText":"Tirupati"},"noOfPkgs":7,"minPrice":12799.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Tirupati","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Tirupati","country":"India","availableFrom":"Mar","availableTo":"Sep"},{"destination":"Gujarat","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1449725165/Hutheesing_Jain_Temple_Ahmedabad.jpg","altText":""},"noOfPkgs":17,"minPrice":13000.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Gujarat","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Gujarat","country":"India","availableFrom":"Feb","availableTo":"Sep"},{"destination":"Arunachal Pradesh","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420538189/Domestic Holidays/Domestic Holidays 2/Arunachal-Pradesh.jpg","altText":""},"noOfPkgs":5,"minPrice":22500.0,"targetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Arunachal Pradesh","mobileTargetURL":"https://packages.yatra.com/holidays/dom/search.htm?destination=Arunachal Pradesh","country":"India","availableFrom":"Mar","availableTo":"Sep"}],"Holiday Ideas":[{"theme":"Mega Sale","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1468237051/Marseille_1468237047.jpg","altText":""},"themeIconImage":null,"description":"","packagesCount":23,"availableFromMonth":"Mar","availableToMonth":"Nov","startFromPrice":28990.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Mega+Sale","perfectHolidayImageURL":null},{"theme":"Yatra Service Assurance","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1490359447/Yatra_Service_Assurance.jpg","altText":""},"themeIconImage":null,"description":"","packagesCount":64,"availableFromMonth":"Mar","availableToMonth":"Mar","startFromPrice":13000.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Yatra+Service+Assurance","perfectHolidayImageURL":null},{"theme":"Honeymoon","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957631/Domestic Holidays/Theme Imagery/Honeymoon.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433248529/Holiday Themes/Honeymoon_Icon.jpg","altText":""},"description":"Take the first step together","packagesCount":257,"availableFromMonth":"Mar","availableToMonth":"Mar","startFromPrice":5400.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Honeymoon","perfectHolidayImageURL":null},{"theme":"Weekend Trips","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1433151789/Domestic Holidays/Holiday Ideas/Weekend-Getaways.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166424/Holiday Themes/Weekend_Getaways_Icon.jpg","altText":""},"description":"Break-free from the busy schedule","packagesCount":133,"availableFromMonth":"Mar","availableToMonth":"Mar","startFromPrice":3499.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Weekend+Trips","perfectHolidayImageURL":null},{"theme":"Adventure","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1449216112/Adventure1.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166422/Holiday Themes/Adventure_Icon.jpg","altText":""},"description":"Explore your untamed side","packagesCount":168,"availableFromMonth":"Mar","availableToMonth":"Mar","startFromPrice":5500.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Adventure","perfectHolidayImageURL":null},{"theme":"Ladies Special","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957632/Domestic Holidays/Theme Imagery/ladies-special.jpg","altText":""},"themeIconImage":null,"description":"Ladies Special","packagesCount":1,"availableFromMonth":"Mar","availableToMonth":"Oct","startFromPrice":53990.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Ladies+Special","perfectHolidayImageURL":null},{"theme":"Beach","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957631/Domestic Holidays/Theme Imagery/Beach.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166422/Holiday Themes/Beach_Icon.jpg","altText":""},"description":"Beaches are for the soul","packagesCount":262,"availableFromMonth":"Mar","availableToMonth":"Mar","startFromPrice":5999.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Beach","perfectHolidayImageURL":null},{"theme":"Romantic","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957632/Domestic Holidays/Theme Imagery/Romantic.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166426/Holiday Themes/Romantic_Icon.jpg","altText":""},"description":"Love is in the air","packagesCount":168,"availableFromMonth":"Mar","availableToMonth":"Mar","startFromPrice":5400.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Romantic","perfectHolidayImageURL":null},{"theme":"Exotic","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957632/Domestic Holidays/Theme Imagery/Exotic.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166423/Holiday Themes/Exotic_Icon.jpg","altText":""},"description":"See it to believe it","packagesCount":90,"availableFromMonth":"Mar","availableToMonth":"Feb","startFromPrice":7999.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Exotic","perfectHolidayImageURL":null},{"theme":"Wildlife","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957633/Domestic Holidays/Theme Imagery/Wildlife.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166424/Holiday Themes/Wildllife_Icon.jpg","altText":""},"description":"A drive to the wilds","packagesCount":77,"availableFromMonth":"Mar","availableToMonth":"Mar","startFromPrice":7300.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Wildlife","perfectHolidayImageURL":null},{"theme":"Group Tours","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957633/Domestic Holidays/Theme Imagery/Grpuo.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166422/Holiday Themes/Group_Icon.jpg","altText":""},"description":"When three is not a crowd","packagesCount":122,"availableFromMonth":"Mar","availableToMonth":"Feb","startFromPrice":3250.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Group+Tours","perfectHolidayImageURL":null},{"theme":"Kids Special","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957631/Domestic Holidays/Theme Imagery/Kids-Special.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166423/Holiday Themes/Kids_Icon.jpg","altText":""},"description":"Motivate the planner in your child","packagesCount":11,"availableFromMonth":"Mar","availableToMonth":"Dec","startFromPrice":9150.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Kids+Special","perfectHolidayImageURL":null},{"theme":"Luxury","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957632/Domestic Holidays/Theme Imagery/Luxury.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166423/Holiday Themes/Luxury_Icon.jpg","altText":""},"description":"Exclusive experiences handpicked","packagesCount":53,"availableFromMonth":"Mar","availableToMonth":"Feb","startFromPrice":12699.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Luxury","perfectHolidayImageURL":null},{"theme":"Food & Wine","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1433151796/Domestic Holidays/Holiday Ideas/Wine-_-Food.jpg","altText":""},"themeIconImage":null,"description":"Eat, drink, and make merry","packagesCount":7,"availableFromMonth":"Mar","availableToMonth":"Dec","startFromPrice":9500.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Food+%26+Wine","perfectHolidayImageURL":null},{"theme":"Bus Tours","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957631/Domestic Holidays/Theme Imagery/Bus-Tours.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166422/Holiday Themes/Bus_Icon.jpg","altText":""},"description":"","packagesCount":13,"availableFromMonth":"Mar","availableToMonth":"Mar","startFromPrice":5500.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Bus+Tours","perfectHolidayImageURL":null},{"theme":"Hill Stations","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1433151740/Domestic Holidays/Holiday Ideas/Hill-Stations.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166422/Holiday Themes/Hill-Stations_Icon.jpg","altText":""},"description":"Feel on the top of the world","packagesCount":268,"availableFromMonth":"Mar","availableToMonth":"Mar","startFromPrice":7849.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Hill+Stations","perfectHolidayImageURL":null},{"theme":"Family","packageThemeImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_yatra_home_page_holiday_ideas/v1448957632/Domestic Holidays/Theme Imagery/Family.jpg","altText":""},"themeIconImage":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaythemes_home_holiday_ideas_icons/v1433166423/Holiday Themes/Family_Icon.jpg","altText":""},"description":"A family that holidays together","packagesCount":940,"availableFromMonth":"Mar","availableToMonth":"Mar","startFromPrice":3499.0,"targetUrl":"https://packages.yatra.com/holidays/themes/landing.htm?packageTheme=Family","perfectHolidayImageURL":null}],"International_Packages":[{"destination":"Europe","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1448957570/Domestic Holidays/Group Tour Imagery/Europe.jpg","altText":""},"noOfPkgs":39,"minPrice":23880.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Europe","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Europe","country":null,"availableFrom":"Feb","availableTo":"Mar"},{"destination":"Dubai","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1396177166/International Holidays/UAE/Dubai/shutterstock_75095596.jpg","altText":"Dubai"},"noOfPkgs":43,"minPrice":13900.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Dubai","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Dubai","country":"United Arab Emirates","availableFrom":"Feb","availableTo":"Dec"},{"destination":"Thailand","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1448957568/Domestic Holidays/Group Tour Imagery/Thailand.jpg","altText":""},"noOfPkgs":42,"minPrice":11000.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Thailand","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Thailand","country":"","availableFrom":"Feb","availableTo":"Feb"},{"destination":"Singapore","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1449142726/SINGAPORE_GROUP.jpg","altText":""},"noOfPkgs":34,"minPrice":17000.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Singapore","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Singapore","country":"","availableFrom":"Feb","availableTo":"Dec"},{"destination":"Australia","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1449142397/Australia_Group.jpg","altText":""},"noOfPkgs":17,"minPrice":109900.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Australia","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Australia","country":"","availableFrom":"Mar","availableTo":"Sep"},{"destination":"Mauritius","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1449142435/MARITIOUS_GROUP.jpg","altText":""},"noOfPkgs":24,"minPrice":21900.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Mauritius","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Mauritius","country":"","availableFrom":"Feb","availableTo":"Oct"},{"destination":"Turkey","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1449725175/Istanbul_Turkey.jpg","altText":""},"noOfPkgs":5,"minPrice":16190.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Turkey","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Turkey","country":"","availableFrom":"Feb","availableTo":"Oct"},{"destination":"Hong Kong","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1514884070/Dream_Cruise_Singapore12_1514884067.jpg","altText":"Hong Kong"},"noOfPkgs":16,"minPrice":26600.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Hong Kong","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Hong Kong","country":"China","availableFrom":"Feb","availableTo":"Nov"},{"destination":"Istanbul","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1481610748/Istanbul_Galata_Tower.jpg","altText":"Istanbul"},"noOfPkgs":5,"minPrice":16190.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Istanbul","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Istanbul","country":"Turkey","availableFrom":"Feb","availableTo":"Oct"},{"destination":"USA","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1396182958/International Holidays/USA/Niagara Falls/shutterstock_105477563.jpg","altText":"Niagara Falls"},"noOfPkgs":7,"minPrice":30000.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=USA","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=USA","country":null,"availableFrom":"Mar","availableTo":"Nov"},{"destination":"Maldives","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1396186145/International Holidays/Maldives/Maldives/07_shutterstock_2206640228129.jpg","altText":"Mauritius"},"noOfPkgs":15,"minPrice":27009.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Maldives","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Maldives","country":"","availableFrom":"Feb","availableTo":"Dec"},{"destination":"Indonesia","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1449725156/Indonesian_old_temple_pura_Besakih.jpg","altText":""},"noOfPkgs":31,"minPrice":9900.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Indonesia","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Indonesia","country":"","availableFrom":"Feb","availableTo":"Oct"},{"destination":"South Africa","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1480569052/Cape_Town_V_A_Waterfront.jpg","altText":"South Africa"},"noOfPkgs":13,"minPrice":85990.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=South Africa","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=South Africa","country":"","availableFrom":"Mar","availableTo":"Sep"},{"destination":"Malaysia","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1441200495/Malaysia1.jpg","altText":""},"noOfPkgs":22,"minPrice":9750.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Malaysia","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Malaysia","country":"","availableFrom":"Feb","availableTo":"Oct"},{"destination":"Canada","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1448957568/Domestic Holidays/Group Tour Imagery/Canada.jpg","altText":""},"noOfPkgs":3,"minPrice":110000.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Canada","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Canada","country":"","availableFrom":"May","availableTo":"Sep"},{"destination":"China","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420538193/Domestic Holidays/Domestic Holidays 2/china.jpg","altText":""},"noOfPkgs":16,"minPrice":26600.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=China","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=China","country":"","availableFrom":"Feb","availableTo":"Nov"},{"destination":"Kenya","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1435034979/Masai_2.jpg","altText":"Kenya"},"noOfPkgs":7,"minPrice":24900.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Kenya","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Kenya","country":"","availableFrom":"Mar","availableTo":"Nov"},{"destination":"Korea","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1477035410/Seoul_Bongeunsa.jpg","altText":"Korea"},"noOfPkgs":4,"minPrice":38990.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Korea","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Korea","country":"","availableFrom":"Mar","availableTo":"Mar"},{"destination":"Cambodia","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1435149325/Thailand_5.jpg","altText":"Cambodia"},"noOfPkgs":3,"minPrice":44990.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Cambodia","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Cambodia","country":"","availableFrom":"Mar","availableTo":"Oct"},{"destination":"Egypt","description":"","destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1455009721/EGal1020_1.jpg","altText":"Egypt"},"noOfPkgs":9,"minPrice":60000.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Egypt","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Egypt","country":"","availableFrom":"Mar","availableTo":"Oct"},{"destination":"Greece","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420604686/Domestic Holidays/Domestic Holidays 2/Greece.jpg","altText":""},"noOfPkgs":5,"minPrice":46990.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Greece","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Greece","country":"","availableFrom":"Mar","availableTo":"Dec"},{"destination":"Vietnam","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420538204/Domestic Holidays/Domestic Holidays 2/Vietnam.jpg","altText":""},"noOfPkgs":2,"minPrice":52990.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Vietnam","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Vietnam","country":"","availableFrom":"Mar","availableTo":"Mar"},{"destination":"New Zealand","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidays_home_dest_for_theme/v1/default.jpg","altText":"New Zealand"},"noOfPkgs":13,"minPrice":61990.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=New Zealand","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=New Zealand","country":"","availableFrom":"Mar","availableTo":"Sep"},{"destination":"Dead Sea","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420604685/Domestic Holidays/Domestic Holidays 2/Dead-Sea.jpg","altText":""},"noOfPkgs":1,"minPrice":80000.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Dead Sea","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Dead Sea","country":"Jordan","availableFrom":"Mar","availableTo":"Oct"},{"destination":"Jordan","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420604686/Domestic Holidays/Domestic Holidays 2/Jordan.jpg","altText":""},"noOfPkgs":2,"minPrice":80000.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Jordan","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Jordan","country":"","availableFrom":"Mar","availableTo":"Oct"},{"destination":"Oslo","description":null,"destinationImages":{"imageUrl":"https://imgcld.yatra.com/ytimages/image/upload/t_holidaydestinations_home_dest_for_theme/v1420604688/Domestic Holidays/Domestic Holidays 2/Oslo.jpg","altText":""},"noOfPkgs":1,"minPrice":106990.0,"targetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Oslo","mobileTargetURL":"https://packages.yatra.com/holidays/intl/search.htm?destination=Oslo","country":"Norway","availableFrom":"Apr","availableTo":"Jul"}]};

				return {
			getHolidayPackage : function(){
				return holidayList;
			}
		}
	}])

	jsonService.factory("socket",["socketFactory","$rootScope",function(socketFactory,$rootScope){
	  var socket = io.connect();
	  return {
	    on: function (eventName, callback) {
	      socket.on(eventName, function () {
	        var args = arguments;
	        $rootScope.$apply(function () {
	          callback.apply(socket, args);
	        });
	      });
	    },
	    emit: function (eventName, data, callback) {
	      socket.emit(eventName, data, function () {
	        var args = arguments;
	        $rootScope.$apply(function () {
	          if (callback) {
	            callback.apply(socket, args);
	          }
	        });
	      })
	    }
	  };
	}]) 

}(window,angular));
(function (window, angular) {
	'use strict';

		var TEMPLATEPATH = '/dist/views/';
	var app = angular.module('website-builder',['ui.router','JsonProvider','btford.socket-io']);

	app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
		$stateProvider
		.state('home',{
			url:'/home',
			templateUrl: TEMPLATEPATH + 'home.html',
			controller: "homeController",
		})
		.state('holidays',{
			url:'/holidays',
			templateUrl: TEMPLATEPATH + 'holidays.html',
			controller: "holidaysController"
		})
		.state('location',{
			url:'/location/:id',
			templateUrl:TEMPLATEPATH + '_holidays_location.html',
			controller: "holidaysController"
		})
		.state('travller',{
			url:'/amigos',
			templateUrl: TEMPLATEPATH + 'travller.html',
			controller: "amigoController"
		})
		.state('travller.friends',{
			url:'/friends',
			templateUrl: TEMPLATEPATH + '_friends.html',
			controller: "friendsController"
		})
		.state('travller.groups',{
			url:'/groups',
			templateUrl: TEMPLATEPATH + '_groups.html',
			controller: "groupsController"
		})
		.state('travller.feeds',{
			url:'/feeds',
			templateUrl: TEMPLATEPATH + '_feeds.html',
			controller: "feedsController"
		})
	}])

	app.run(['$rootScope',"$window",'localStorage',function($rootScope,$window,localStorage){
		$rootScope.currentUser = localStorage.getCurrentUser();
	}])


	app.controller("loginController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){

			}]);
	app.controller("travllerController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){

			}]);
	app.controller("amigoController",['$scope','$rootScope','$window','localStorage','$state','socket', function($scope,$rootScope,$window,localStorage,$state,socket){
		$rootScope.notificationsCount = 0;
		$rootScope.notifyShow = false;
		socket.on("notification",function(){
			$scope.notification.push({"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."});
		}); 
	}]);
	app.controller("groupsController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){
	}]);
	app.controller("friendsController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){
		$scope.friends = [{"name":"Srinivas Nagorkar","mobile":"+91-9742015199"},{"name":"Ramabrahmam C","mobile":"+91-9898778778"},{"name":"Raj Kumar Thakur","mobile":"+91-98767767878"},{"name":"Deepanshu Sharma","mobile":"+91-9878765434"},{"name":"Vishnu Vardhan","mobile":"+91-9742015199"}]
		$scope.invites = [{"name":"Taraun Shahi","mobile":"+91-9098989878"},{"name":"Ventak Anna","mobile":"+91-9898778778"},{"name":"Raj Kumar Thakur","mobile":"+91-98767767878"},{"name":"Deepanshu Sharma","mobile":"+91-9878765434"},{"name":"Vishnu Vardhan","mobile":"+91-9742015199"}]
	}]);
	app.controller("feedsController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){
		$scope.notification= [{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."}];
		$rootScope.notificationsCount = $scope.notification.length;
		$scope.testNotify = function(){
			if (Notification.permission !== "granted")
				Notification.requestPermission();
			  else {
				var notification = new Notification('Yatra Amigos Update', {
				  icon: 'https://css.yatra.com/content/fresco/beetle/images/newIcons/yatra_logo.svg',
				  body: "Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel.",
				});

				notification.onclick = function () {
				  window.open("http://localhost:3333/#!/amigos/feeds");      
				};

			  }
		};
	}]);



	app.controller("homeController",['$scope','$rootScope','$window','$state','$compile',function($scope,$rootScope,$window,$state,$compile){
		console.log("inside home Controller");


			}])

	app.controller("holidaysController",['$scope','$rootScope','$window','$state','$compile',"jsonServiceProvider","$stateParams",function($scope,$rootScope,$window,$state,$compile,jsonServiceProvider,$stateParams){
		console.log("inside holidaysController");

				$scope.goToBack = function(){
			$window.history.back();
		}
		$scope.location = $stateParams.id;
		$scope.holidayData = jsonServiceProvider.getHolidayPackage();
		console.log($scope.holidayData);

		$scope.chnageFavourite =function(list){
			list.favourite = list.favourite ? false:true;
		}
		$scope.goToDestination = function(list){
			console.log("destinatin called");
			$state.go("location",{"id":list.destination});
		}
	}])



	app.factory("localStorage",['$window',function($window){
		return {
			getCurrentUser:function(){
				var data = $window.localStorage.getItem('currentUser') ? JSON.parse($window.localStorage.getItem('currentUser')) :{};
				return data;
			},
			setCurrentUser:function(user){
				var data = JSON.stringify(user);
				$window.localStorage.setItem('currentUser',data);
			},
			getUserList:function(){
				var data = JSON.parse($window.localStorage.getItem('userList'));
				return data;
			},
			setUserList:function(user){
				var data = $window.localStorage.getItem('userList')  ? JSON.parse($window.localStorage.getItem('userList')):[];
				data.push(user);
				data = JSON.stringify(data);
				$window.localStorage.setItem('userList',data);
			}


		};
	}]);

		app.factory('socketio',['$rootScope',function ($rootScope) {
	  var socket = io.connect();
	  return {
		on: function (eventName, callback) {
		  socket.on(eventName, function () {  
			var args = arguments;
			$rootScope.$apply(function () {
			  callback.apply(socket, args);
			});
		  });
		},
		emit: function (eventName, data, callback) {
		  socket.emit(eventName, data, function () {
			var args = arguments;
			$rootScope.$apply(function () {
			  if (callback) {
				callback.apply(socket, args);
			  }
			});
		  })
		}
	  };
	}]);


	app.directive("contentEditable",function(){
		return {
			restrict:'A',
			scope:{
				type:'@'
			}, 
			templateUrl:'dist/views/contentEditable.html',
			controller:['$scope','$window',function($scope,$window){
				console.log("inside directive controller",$scope);
				$scope.isEditable = false;
				$scope.shownData = {
					headerMsg : "This is Header Text",
					paragraphMsg : "This is paragraph text",
					imageUrl : "https://imgur.com/P7LmaTe.jpg",
					anchorUrl : "https://www.moengage.com/",
					anchorDescription : "This is our website",
				}

				$scope.data = {};

				$scope.changeEditMode = function(){
					$scope.isEditable = !$scope.isEditable;
					var count = parseInt($window.localStorage.getItem('isPrint'));
					if($scope.isEditable){
						$scope.setData();
						$window.localStorage.setItem('isPrint',count + 1);
					}
					else{
						$window.localStorage.setItem('isPrint',count - 1);
					}
				}

				$scope.setData = function(){
					angular.forEach($scope.shownData,function(value,key){
						$scope.data[key] = value;
					})
				}
				$scope.goToLink = function(){
					$window.open($scope.shownData.anchorUrl, '_blank');
				}

				$scope.updateContent = function(){
					switch($scope.type){
						case 'header' : $scope.shownData.headerMsg = $scope.data.headerMsg;
										break;
						case 'paragraph' : $scope.shownData.paragraphMsg = $scope.data.paragraphMsg;
										break;
						case  'image'	: $scope.shownData.imageUrl = $scope.data.imageUrl;
											break;
						case  'anchor'  : $scope.shownData.anchorUrl = $scope.data.anchorUrl;
											$scope.shownData.anchorDescription = $scope.data.anchorDescription;
											break;
						default :		console.log("undefined type");		
					}

					$scope.data ={};
					$scope.isEditable =false;
					var count = parseInt($window.localStorage.getItem('isPrint'));
					$window.localStorage.setItem('isPrint',count - 1);
				}
			}]
		}
	})

}(window, angular));	