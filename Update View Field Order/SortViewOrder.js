$('tbody#tbodyViewColumns > tr > td.ms-authoringControls tbody').sortable({

    items: 'tr:not(:first-child)',

    helper: function (e, ui) {
        ui.children().each(function () {
            $(this).width($(this).width());
        });
        return ui;
    },

    update: function () {
        $('tbody#tbodyViewColumns > tr > td.ms-authoringControls tbody tr:not(:first-child) select').each(function (indx) {
            var select = $(this);

            var selectedVal = select.children('option').filter(function () {
                return $(this).text() == indx + 1;
            }).val();

            select.val(selectedVal);
        });
    }
});