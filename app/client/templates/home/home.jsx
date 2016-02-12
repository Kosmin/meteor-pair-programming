/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
  ReactDOM.render(
    <CodeBox snippet={Template.currentData().currentSnippet} field="original" />,
    document.getElementById("original-code-box")
  );

  ReactDOM.render(
    <CodeBox snippet={Template.currentData().currentSnippet} field="suggestion" />,
    document.getElementById("suggestion-code-box")
  );

  Tracker.autorun(function (e) {
    editor = AceEditor.instance("original-code-box");
    if(editor.loaded!==undefined){
    e.stop();
    }
  });

  Tracker.autorun(function (e) {
    editor = AceEditor.instance("suggestion-code-box");
    if(editor.loaded!==undefined){
    e.stop();
    }
  });
});

Template.Home.onDestroyed(function () {
});
