# Register some mime types

MimeMagic.add('application/x-empty', :comment => 'Empty file')
MimeMagic.add('inode/directory',     :comment => 'Directory')

MimeMagic.add('text/x-creole',
              :extensions => %w(creole text),
              :parents => 'text/plain',
              :comment => 'Creole Wiki Text File')

MimeMagic.add('text/x-markdown',
              :extensions => %w(markdown md mdown mkdn mdown),
              :parents => 'text/plain',
              :comment => 'Markdown Text File')

MimeMagic.add('text/x-markdown.maruku',
              :extensions => %w(maruku),
              :parents => 'text/x-markdown',
              :comment => 'Markdown Text File (Maruku Variant)')

MimeMagic.add('text/x-markdown.kramdown',
              :extensions => %w(kramdown),
              :parents => 'text/x-markdown',
              :comment => 'Markdown Text File (Kramdown Variant)')

MimeMagic.add('text/x-textile',
              :extensions => 'textile',
              :parents => 'text/plain',
              :comment => 'Textile Text File')

MimeMagic.add('text/x-orgmode',
              :extensions => 'org',
              :parents => 'text/plain',
              :comment => 'Emacs Orgmode File')
