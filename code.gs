function loadAddOn(event) {
  var accessToken = event.gmail.accessToken;
  var messageId = event.gmail.messageId;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  var mailMessage = GmailApp.getMessageById(messageId);
  var from = mailMessage.getFrom();
  var t = mailMessage.getDate();
  var sub = mailMessage.getSubject();

//things that may be used more than once
//Note Function, Makes a Note at the bottom of the page
  var notes = CardService.newTextInput().setFieldName("Notes").setHint("Put Notes Here, does not Save. Useful for copy/paste").setMultiline(true)
  var div = CardService.newDivider()
  var credits = CardService.newTextParagraph()
    .setText("Brady Delgadillo")
//The code that builds all da stoff
  var card = CardService.newCardBuilder()
      .addSection(CardService.newCardSection()
          .addWidget(CardService.newDecoratedText().setText("Email Overview"))
          .addWidget(div)
          .addWidget(CardService.newTextParagraph().setText("The Subject is: " + sub))
          .addWidget(CardService.newTextParagraph().setText("The email is from: " + from))
          .addWidget(CardService.newTextParagraph().setText("This email was sent at: " + t )))
      .addSection(CardService.newCardSection()
          .addWidget(CardService.newTextParagraph().setText("Beta V0.2.6"))
          .addWidget(CardService.newTextParagraph().setText("2021 Duck LLC")))
      .addSection(CardService.newCardSection()
          .addWidget(CardService.newTextParagraph().setText("Credits"))
          .addWidget(credits))
      .build();
  return [card];
}
