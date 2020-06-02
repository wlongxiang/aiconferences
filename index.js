$(document).ready(function () {

    $.getJSON("data_v4.json", function (result) {
        var allrow = "";
        $.each(result, function (i, field) {
            console.log(field);
            console.log(field["Conference"])
            allrow += '<tr>' +
                '<td><a href=' + field.Link + 'target=\"_blank\">' + field.Conference + '</a></td>' +
                '<td>' + field.City + '</td>' +
                '<td>' + field.Country + '</td>' +
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
                // info: false
            }

        );

        $('#mySearchInput').on('keyup change', function () {
            oTable.search($(this).val()).draw();
        })

    });
});