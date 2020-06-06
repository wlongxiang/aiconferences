$(document).ready(function () {
    // due to limitations for github, copy content from data_v4.json and paste it here.
    result = [{ "Conference": "15th IEEE International Conference on Automatic Face and Gesture Recognition", "City": "Buenos Aires", "Country": "Argentina", "Start Date": "2020\/11\/16", "End Date": "2020\/11\/20", "Link": "https:\/\/fg2020.org\/" }, { "Conference": "AI Summit NSW 2020", "City": "Sydney", "Country": "Australia", "Start Date": "2020\/10\/07", "End Date": "2020\/10\/07", "Link": "https:\/\/forefrontevents.com.au\/event\/ai-summit-nsw-2020\/" }, { "Conference": "IPSN 2020", "City": "Sydney", "Country": "Australia", "Start Date": "2020\/10\/21", "End Date": "2020\/10\/24", "Link": "http:\/\/spaceiot.ewi.tudelft.nl\/2020\/" }, { "Conference": "VB Transform", "City": "San Francisco", "Country": "USA", "Start Date": "2020\/07\/15", "End Date": "2020\/07\/16", "Link": "https:\/\/www.vbtransform.com\/" }, { "Conference": "KDD 2020", "City": "San Diego", "Country": "USA", "Start Date": "2020\/08\/23", "End Date": "2020\/08\/27", "Link": "https:\/\/www.kdd.org\/kdd2020\/" }, { "Conference": "AI Hardware Summit USA", "City": "Mountain View", "Country": "USA", "Start Date": "2020\/09\/29", "End Date": "2020\/09\/30", "Link": "https:\/\/aihardwaresummit.com\/events\/ai-hardware-summit-2020#agenda" }, { "Conference": "DSS | Los Angeles", "City": "Los Angeles", "Country": "USA", "Start Date": "2020\/11\/11", "End Date": "2020\/11\/11", "Link": "https:\/\/www.datascience.salon\/la\/" }, { "Conference": "NLP Summit West", "City": "San Francisco", "Country": "USA", "Start Date": "2020\/11\/17", "End Date": "2020\/11\/18", "Link": "https:\/\/nlp-summit.johnsnowlabs.com\/west-registration\/" }, { "Conference": "Brain Inspired Computing Congress", "City": "Silicon Valley", "Country": "USA", "Start Date": "2020\/11\/18", "End Date": "2020\/11\/19", "Link": "https:\/\/www.kisacoresearch.com\/events\/brain-inspired-computing#partners" }, { "Conference": "Edge AI Summit", "City": "Mountain View", "Country": "USA", "Start Date": "2020\/11\/24", "End Date": "2020\/11\/25", "Link": "https:\/\/www.edgeaisummit.com\/events\/edge-ai-summit-2019" }, { "Conference": "AI and Machine Learning strategies Summit 2020", "City": "Toronto", "Country": "Canada", "Start Date": "2020\/09\/15", "End Date": "2020\/09\/16", "Link": "https:\/\/www.aiandmachinelearning.ca\/" }, { "Conference": "Rework Reinforcement Learning Summit", "City": "Toronto", "Country": "Canada", "Start Date": "2020\/10\/22", "End Date": "2020\/10\/23", "Link": "https:\/\/bit.ly\/30kjiUc" }, { "Conference": "Rework AI in Finance Summit", "City": "Toronto", "Country": "Canada", "Start Date": "2020\/10\/22", "End Date": "2020\/10\/23", "Link": "https:\/\/bit.ly\/30p50BM" }, { "Conference": "Rework Deep Learning Summit", "City": "Toronto", "Country": "Canada", "Start Date": "2020\/10\/22", "End Date": "2020\/10\/23", "Link": "https:\/\/bit.ly\/2YKajeE" }, { "Conference": "The AI Summit London", "City": "London", "Country": "England", "Start Date": "2020\/09\/02", "End Date": "2020\/09\/03", "Link": "https:\/\/london.theaisummit.com\/" }, { "Conference": "Rework Deep Learning Summit", "City": "London", "Country": "England", "Start Date": "2020\/09\/24", "End Date": "2020\/09\/25", "Link": "https:\/\/bit.ly\/2YKajeE" }, { "Conference": "Rework AI in Retail Summit", "City": "London", "Country": "England", "Start Date": "2020\/09\/24", "End Date": "2020\/09\/25", "Link": "https:\/\/bit.ly\/2YDqIlb" }, { "Conference": "Rework AI for Marketing Summit", "City": "London", "Country": "England", "Start Date": "2020\/09\/24", "End Date": "2020\/09\/25", "Link": "https:\/\/bit.ly\/2XzEwAT" }, { "Conference": "PRADI 2020", "City": "London", "Country": "England", "Start Date": "2020\/11\/16", "End Date": "2020\/11\/17", "Link": "http:\/\/www.global-engage.com\/event\/pharma-informatics-congress\/" }, { "Conference": "ConTech 2020", "City": "London", "Country": "England", "Start Date": "2020\/12\/03", "End Date": "2020\/12\/04", "Link": "https:\/\/www.contech-event.com\/ConTech2020" }, { "Conference": "DSS | Miami", "City": "Miami", "Country": "USA", "Start Date": "2020\/09\/08", "End Date": "2020\/09\/09", "Link": "https:\/\/www.datascience.salon\/miami\/" }, { "Conference": "Southern Data Science Conference", "City": "Atlanta", "Country": "USA", "Start Date": "2020\/08\/12", "End Date": "2020\/08\/14", "Link": "https:\/\/www.southerndatascience.com\/" }, { "Conference": "ML Conference", "City": "Munich", "Country": "Germany", "Start Date": "2020\/06\/17", "End Date": "2020\/06\/19", "Link": "https:\/\/mlconference.ai\/munich\/" }, { "Conference": "Advanced Artificial Intelligence & Robotics", "City": "Berlin", "Country": "Germany", "Start Date": "2020\/07\/28", "End Date": "2020\/07\/29", "Link": "https:\/\/www.artificialintelligence.gavinconferences.com\/index" }, { "Conference": "AI Hardware Summit Europe", "City": "Munich", "Country": "Germany", "Start Date": "2020\/10\/29", "End Date": "2020\/10\/30", "Link": "https:\/\/aihardwaresummiteu.com\/events\/ai-hardware-summit-europe#agenda" }, { "Conference": "AISTATS", "City": "Palermo", "Country": "Italy", "Start Date": "2020\/06\/03", "End Date": "2020\/06\/05", "Link": "https:\/\/www.aistats.org\/" }, { "Conference": "ICPR 2020", "City": "Milan", "Country": "Italy", "Start Date": "2020\/09\/13", "End Date": "2020\/09\/18", "Link": "https:\/\/www.icpr2020.it\/" }, { "Conference": "IJCAI-PRICAI 2020", "City": "Yokohama", "Country": "Japan", "Start Date": "2020\/07\/11", "End Date": "2020\/07\/17", "Link": "https:\/\/www.ijcai20.org" }, { "Conference": "4D Meets AI", "City": "Boston", "Country": "USA", "Start Date": "2020\/09\/22", "End Date": "2020\/09\/22", "Link": "http:\/\/4dmeetsai.com\/" }, { "Conference": "AI Accelerator Summit Boston", "City": "Boston", "Country": "USA", "Start Date": "2020\/10\/16", "End Date": "2020\/10\/17", "Link": "https:\/\/aiacceleratorsummit.com\/location\/boston" }, { "Conference": "NLP Summit East", "City": "Boston", "Country": "USA", "Start Date": "2020\/10\/27", "End Date": "2020\/10\/28", "Link": "https:\/\/nlp-summit.johnsnowlabs.com\/east-registration\/" }, { "Conference": "Rework Deep Learning in Healthcare Summit", "City": "Boston", "Country": "USA", "Start Date": "2021\/03\/25", "End Date": "2021\/03\/26", "Link": "https:\/\/www.re-work.co\/events\/deep-learning-in-healthcare-summit-boston-2020#utm_source=event_listing&amp;amp;utm_medium=website_ml_conference_list&amp;amp;utm_campaign=MP_TryOLabs_HealthBTN2020" }, { "Conference": "Machine Learning Summer School", "City": "Breukelen", "Country": "Netherlands", "Start Date": "2020\/07\/07", "End Date": "2020\/07\/10", "Link": "https:\/\/bigml.com\/events\/machine-learning-summer-school-in-the-netherlands-2020" }, { "Conference": "World Summit AI", "City": "Amsterdam", "Country": "Netherlands", "Start Date": "2020\/10\/13", "End Date": "2020\/10\/14", "Link": "https:\/\/worldsummit.ai\/" }, { "Conference": "AI4 2020", "City": "Las Vegas", "Country": "USA", "Start Date": "2020\/09\/01", "End Date": "2020\/09\/02", "Link": "https:\/\/ai4.io\/" }, { "Conference": "IROS 2020", "City": "Las Vegas", "Country": "USA", "Start Date": "2020\/10\/25", "End Date": "2020\/10\/29", "Link": "http:\/\/www.iros2020.org\/" }, { "Conference": "AI\/Data Science Conference", "City": "New York", "Country": "USA", "Start Date": "2020\/07\/23", "End Date": "2020\/07\/24", "Link": "https:\/\/aiscienceconference.com\/" }, { "Conference": "Rework AI in Insurance Summit", "City": "New York", "Country": "USA", "Start Date": "2020\/09\/03", "End Date": "2020\/09\/04", "Link": "https:\/\/bit.ly\/2S8vnZR" }, { "Conference": "Rework AI in Finance Summit", "City": "New York", "Country": "USA", "Start Date": "2020\/09\/03", "End Date": "2020\/09\/04", "Link": "https:\/\/bit.ly\/30p50BM" }, { "Conference": "O'Reilly Artificial Intelligence Conference", "City": "New York", "Country": "USA", "Start Date": "2020\/09\/14", "End Date": "2020\/09\/17", "Link": "https:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ny" }, { "Conference": "DSS | New York", "City": "New York", "Country": "USA", "Start Date": "2020\/10\/15", "End Date": "2020\/09\/22", "Link": "https:\/\/www.datascience.salon\/newyork\/" }, { "Conference": "IEEE WCCI", "City": "Glasgow", "Country": "Scotland", "Start Date": "2020\/07\/19", "End Date": "2020\/07\/24", "Link": "https:\/\/wcci2020.org\/" }, { "Conference": "ECCV 2020", "City": "Glasgow", "Country": "Scotland", "Start Date": "2020\/08\/23", "End Date": "2020\/08\/28", "Link": "https:\/\/eccv2020.eu" }, { "Conference": "ECAI 2020", "City": "Santiago de Compostela", "Country": "Spain", "Start Date": "2020\/08\/29", "End Date": "2020\/09\/02", "Link": "http:\/\/ecai2020.eu\/" }, { "Conference": "COLING 2020", "City": "Barcelona", "Country": "Spain", "Start Date": "2020\/09\/13", "End Date": "2020\/09\/18", "Link": "https:\/\/coling2020.org\/" }, { "Conference": "Python Machine Learning Conference 2020", "City": "Basel", "Country": "Switzerland", "Start Date": "2020\/09\/21", "End Date": "2020\/09\/22", "Link": "http:\/\/2020.pythonml.org" }, { "Conference": "Connected Manufacturing Forum 2020", "City": "Austin", "Country": "USA", "Start Date": "2020\/08\/31", "End Date": "2020\/09\/01", "Link": "https:\/\/connectedmanufacturing.wbresearch.com\/" }, { "Conference": "Artificial Intelligence and Neural Networks", "City": "Dubai", "Country": "UAE", "Start Date": "2020\/06\/18", "End Date": "2020\/06\/19", "Link": "https:\/\/neuralnetworks.conferenceseries.com\/" }, { "Conference": "IEEE International Conference on Image Processing", "City": "Abu Dhabi", "Country": "United Arab Emirates", "Start Date": "2020\/10\/25", "End Date": "2020\/10\/28", "Link": "https:\/\/2020.ieeeicip.org\/" },
    {
        "Conference": "CVPR 2020",
        "City": "Online",
        "Country": "Online",
        "Start Date": "2020\/06\/14",
        "End Date": "2020\/06\/19",
        "Link": "http:\/\/cvpr2020.thecvf.com\/"
    },
    { "Conference": "Applied Machine Learning Conference at Tom Tom Summit", "City": "Charlottesville", "Country": "USA", "Start Date": "2020\/09\/23", "End Date": "2020\/09\/23", "Link": "https:\/\/tomtomfest.com\/machine-learning\/" }, { "Conference": "DSS | Seattle", "City": "Seattle", "Country": "USA", "Start Date": "2020\/09\/30", "End Date": "2020\/09\/30", "Link": "https:\/\/www.datascience.salon\/seattle\/" }, { "Conference": "FODS-2020", "City": "Seattle", "Country": "USA", "Start Date": "2020\/10\/18", "End Date": "2020\/10\/20", "Link": "https:\/\/fods.acm.org\/" }, { "Conference": "Rework AI for Good Summit", "City": "Seattle", "Country": "USA", "Start Date": "2020\/11\/12", "End Date": "2020\/11\/13", "Link": "https:\/\/bit.ly\/2G3Jxqq" }, { "Conference": "Rework Applied AI Summit", "City": "Seattle", "Country": "USA", "Start Date": "2020\/11\/12", "End Date": "2020\/11\/13", "Link": "https:\/\/bit.ly\/32gXf2D" }, { "Conference": "DSS | Elevate virtual conference VOL 2", "City": "Online", "Country": "Online", "Start Date": "2020\/06\/18", "End Date": "2020\/06\/18", "Link": "https:\/\/www.datascience.salon\/dss-elevate-virtual-conference-june-18\/" }, { "Conference": "ACL 2020", "City": "Online", "Country": "Online", "Start Date": "2020\/07\/05", "End Date": "2020\/07\/10", "Link": "https:\/\/acl2020.org\/" }, { "Conference": "ICML 2020", "City": "Online", "Country": "Online", "Start Date": "2020\/07\/12", "End Date": "2020\/07\/18", "Link": "https:\/\/icml.cc\/Conferences\/2020\/" }, { "Conference": "DSS | Elevate virtual conference VOL 3", "City": "Online", "Country": "Online", "Start Date": "2020\/07\/30", "End Date": "2020\/07\/30", "Link": "https:\/\/www.datascience.salon\/dss-elevate-virtual-conference-july-30\/" }, { "Conference": "DSS | Elevate virtual conference VOL 4", "City": "Online", "Country": "Online", "Start Date": "2020\/08\/27", "End Date": "2020\/08\/27", "Link": "https:\/\/www.datascience.salon\/dss-elevate-virtual-conference-august-27\/" },
    {
        "Conference": "AI for Good",
        "City": "Geneva",
        "Country": "Switzerland",
        "Start Date": "2020\/09\/21",
        "End Date": "2020\/09\/25",
        "Link": "https:\/\/aiforgood.itu.int\/"
    },
    {
        "Conference": "NeurIPS 2020",
        "City": "Vancouver",
        "Country": "Cannada",
        "Start Date": "2020/12/02",
        "End Date": "2020/12/22",
        "Link": "https://nips.cc/"
    },

    {
        "Conference": "EMNLP 2020",
        "City": "Online",
        "Country": "Online",
        "Start Date": "2020/11/16",
        "End Date": "2020/11/20",
        "Link": "https://2020.emnlp.org/"
    },

    ]
    var allrow = "";
    $.each(result, function (i, field) {
        var icon =  '📍';
        if (field.City === "Online"){
            icon = '🔗';
        }
        allrow += '<tr>' +
            '<td><a href=' + '"' + field.Link + '"' + ' target=\"_blank\">' + field.Conference + '</a></td>' +
            '<td>' + icon + field.City + '</td>' +
            '<td>' + icon + field.Country + '</td>' +
            '<td>' + field["Start Date"] + '</td>' +
            '<td>' + field["End Date"] + '</td>' +
            '</tr>';
    });
    $('#example > tbody:last-child').append(allrow);

    oTable = $('#example').DataTable(
        {
            // "scrollY": "800px",
            // "scrollCollapse": true,
            "paging": false,
            // below sdom makes search bar dispear, 
            'sDom': 't',
            // default sorting by 4th col.
            "order": [[3, "asc"]]
            // info: false
        }

    );

    $('#mySearchInput').on('keyup change', function () {
        oTable.search($(this).val()).draw();
    })

});