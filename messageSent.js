export default function messageSent() {
  const messageSentDiv = document.createElement('div');
  const messageSentHeading3 = document.createElement('h3');
  const messageSentParagraph = document.createElement('p');

  messageSentHeading3.innerText = 'Message Sent!';
  messageSentParagraph.innerText =
    "Thanks for completing the form. We'll be in touch soon!";
  messageSentDiv.classList.add('message-sent');
  messageSentDiv.appendChild(messageSentHeading3);
  messageSentDiv.appendChild(messageSentParagraph);
  document.body.appendChild(messageSentDiv);

  setTimeout(() => {
    document.body.removeChild(messageSentDiv);
  }, 5000);
}
