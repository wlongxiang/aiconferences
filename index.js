$(document).ready(function () {
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

$('#mySearchInput').on('keyup change', function(){
  oTable.search($(this).val()).draw();
})
});