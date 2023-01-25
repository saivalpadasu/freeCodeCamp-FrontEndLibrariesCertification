function copyingQuote() {
    var copyText = document.getElementById("quote");
    let pureText = copyText.innerText.replace(/^\s+|\s+$/g, '');
    let inp = document.createElement('input');
    inp.setAttribute('value', pureText);
    document.body.appendChild(inp);
    inp.select();
    document.execCommand("Copy");
    inp.parentNode.removeChild(inp);
  }
  
  function colorTextChanger(){
    let facts_list = [
      {
          fact:"The deviation of man from the state in which he was originally placed by nature seems to have proved to him a prolific source of diseases",
          author: "-Edward Jenner"
      }, {
          fact:"The way to get started is to quit talking and begin doing.",
          author: "-Walt Disney"
      }, {
          fact:"Life is what happens when you're busy making other plans.",
          author: "-John Lennon"
      }, {
          fact:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
          author: "-James Cameron"
      }, {
          fact:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
          author: "-Oprah Winfrey"
      }, {
          fact:"If life were predictable it would cease to be life, and be without flavor.",
          author: "-Eleanor Roosevelt"
      }]
    let num = Math.floor(Math.random()*5);
    let fact_text = (facts_list[num].fact);
    let author_text = facts_list[num].author;
    document.getElementById('quote').innerText = fact_text;
    document.getElementById('author-text').innerText = author_text;
    let color ="#"
    let values="0123456789ABCDEF";
    for(let i =0; i<6; i++){
      color += values[Math.floor(Math.random()*16)];
    }
    document.body.style.background = color;
    document.querySelector('button').style.background = color
    document.getElementById('button1').style.background = color;
    document.getElementById('tweet').style.background = color;
  }