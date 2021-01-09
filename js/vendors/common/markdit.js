import {lib, extTemplate} from "../ao2"
import marked from "marked";

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

extTemplate({
  "@md": function(value, key){
    if (lib.isString(value)) {
      value = value.trim()
    } else {
      return null
    }
    let markdownContent = marked(value);
    return (
      <View key={key} className="markdown-section" dangerouslySetInnerHTML={{ __html: markdownContent }}></View>
    )
  },

  "@html": function(value, key){
    if (lib.isString(value)) {
      value = value.trim()
    } else {
      return null
    }
    return (
      <View key={key} className="html-section" dangerouslySetInnerHTML={{ __html: value }}></View>
    )
  }
})