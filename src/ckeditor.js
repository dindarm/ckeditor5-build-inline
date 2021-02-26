/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor'

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'

import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'

import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock'

import Link from '@ckeditor/ckeditor5-link/src/link'
import List from '@ckeditor/ckeditor5-list/src/list'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties'
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties'

import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation'

import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock'
import Font from '@ckeditor/ckeditor5-font/src/font'
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline'

import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'

import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg'

class InsertImage extends Plugin {
  init() {
    const editor = this.editor

    editor.ui.componentFactory.add('insertImage', (locale) => {
      const view = new ButtonView(locale)

      view.set({
        label: 'Dosya yöneticisini aç',
        icon: imageIcon,
        tooltip: true,
      })

      // Callback executed once the image is clicked.
      view.on('execute', () => {
        editor.ownerVM.showFilePicker()
      })

      return view
    })
  }
}

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
  Essentials,
  UploadAdapter,
  Autoformat,
  Font,
  Bold,
  Underline,
  Strikethrough,
  Code,
  Subscript,
  Superscript,
  Italic,
  BlockQuote,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageResize,
  Indent,
  IndentBlock,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TextTransformation,
  PasteFromOffice,
  Alignment,
  RemoveFormat,

  HorizontalLine,
  CodeBlock,

  InsertImage,
]

// Editor configuration.
InlineEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'alignment',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'code',
      'subscript',
      'superscript',
      'link',
      'bulletedList',
      'numberedList',
      'letterBullet',
      '|',
      'fontSize',
      'fontFamily',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'indent',
      'outdent',
      '|',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'horizontalLine',
      'undo',
      'redo',
      '|',
      'insertImage',
      '|',
      'codeBlock',
      'removeFormat',
    ],
  },
  image: {
    toolbar: ['imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:full', 'imageStyle:alignRight', '|', 'imageTextAlternative', '|', 'imageResize'],
    styles: [
      'full',
      'alignLeft',
      'alignCenter',

      // This represents an image aligned to the right.
      'alignRight',
    ],

    // Configure the available image resize options.
    resizeOptions: [
      {
        name: 'imageResize:original',
        label: 'Original',
        value: null,
      },
      {
        name: 'imageResize:25',
        label: '25%',
        value: '25',
      },
      {
        name: 'imageResize:50',
        label: '50%',
        value: '50',
      },
      {
        name: 'imageResize:75',
        label: '75%',
        value: '75',
      },
    ],
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'],
  },
  link: {
    decorators: {
      toggleDownloadable: {
        mode: 'manual',
        label: 'İndirilebilir',
        attributes: {
          download: 'file',
        },
      },
      openInNewTab: {
        mode: 'manual',
        label: 'Yeni sekmede aç',
        defaultValue: true, // This option will be selected by default.
        attributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      },
    },
  },
  indentBlock: {
    offset: 1,
    unit: 'em',
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'tr',
  additionalLanguages: 'en',
}
