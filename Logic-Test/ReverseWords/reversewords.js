function reverse(form) {
  let text = [];
  let str = form.revtext.value;
  for (i = 0; i <= str.length; i++) text = str.substring(i, i + 1) + text;
  form.revtext.value = text;
}
