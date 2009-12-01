// Wiki bootstrap
// Written by Daniel Mendler
$(function() {
    $('.tabs').tabs();

    $('table.sortable').tablesorter({widgets: ['zebra']});

    $('table.history').disableSelection();
    $('table.history td *').css({ cursor: 'move' });
    $('table.history tbody tr').draggable({
	helper: function() {
	    var table = $('<table class="history-draggable"><tbody>' + $(this).html() + '</tbody></table>');
	    var a = $.makeArray(table.find('td'));
	    var b = $.makeArray($(this).find('td'));
	    for (var i = 0; i < a.length; ++i)
		$(a[i]).css({ width: $(b[i]).width() + 'px' });
	    return table;
	}
    }).droppable({
	hoverClass: 'history-droppable-hover',
	drop: function(event, ui) {
	    var to = this.id;
	    var from = ui.draggable.attr('id');
	    if (to != from)
		location.href = '/diff?from=' + from + '&to=' + to;
	}
    });

    $('.zebra tr:even').addClass('even');
    $('.zebra tr:odd').addClass('odd');

    $('input.clear').focus(function() {
	if (this.value == this.defaultValue)
	    this.value = '';
    }).blur(function() {
	if (this.value == '')
	    this.value = this.defaultValue;
    });

    $('.date').dateToggler();
    $('label, #menu, .tabs > ul').disableSelection();
    $('#upload-file').change(function() {
	var elem = $('#upload-path');
	if (elem.size() == 1) {
	    var val = elem.val();
	    if (val == '') {
		elem.val(this.value);
	    } else if (val.match(/^(.*\/)?new page$/)) {
		val = val.replace(/new page$/, '') + this.value;
		elem.val(val);
	    }
	}
    });

    $('*[accesskey]').underlineAccessKey();

    $('#themes').styleswitcher();
});
