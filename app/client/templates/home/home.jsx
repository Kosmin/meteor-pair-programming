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
});

Template.Home.onDestroyed(function () {
});
