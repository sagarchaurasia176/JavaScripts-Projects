const userInputWritten = document.querySelector("#userInputWritten");
const clickToFetchData = document.querySelector("#clickToFetchData");
const containerOFWord = document.querySelector(".words");
//inside dictionary id's
const errorMsg = document.querySelector(".oops-msg");

const meaningOfWords = document.querySelector("#meaningOfWords");
const PhoneticsOfWord = document.querySelector("#PhoneticsOfWord");
const audioOfWord = document.querySelector("#audioOfWord");
const definitionOfWord = document.querySelector("#definitionOfWord");
const exampleOfWord = document.querySelector("#exampleOfWord");
const partsOfSpeech = document.querySelector("#partsOfSpeech");

const fetchmsg = document.querySelector(".oops-msg");

async function dictionaryApp(word) {
  fetchmsg.innerHTML = "searching you'r word";
  const url = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  ).then((url) => url.json());
  console.log(url);

  fetchmsg.innerHTML = "";
  containerOFWord.innerHTML = `

    <div class="words" >
         <span id="meaningOfWords" style="border-bottom: 2px solid black;">Name of word
          <p style="color: black ; font-family: sans-serif; padding: 1.1rem;">
          ${userInputWritten.value}
          </p>

         </span><br>

         <div class="phonetics-of-word">
            <span id="PhoneticsOfWord" style="border-bottom: 2px solid black;">Phonetic's
              <p style="color: black ; font-family: sans-serif; padding: 1.1rem;">
              ${url[0].phonetic}

                </p>
          </span><br>
        
            <div class="definition">
             
              <span id="PhoneticsOfWord" style="border-bottom: 2px solid black;">Definition's
                <p style="color: black ; font-family: sans-serif; padding: 1.1rem;">
              ${url[0].meanings[0].definitions[0].definition}
                <br>
                </p>
              </span><br>


              <div class="example">
                <span id="PhoneticsOfWord" style="border-bottom: 2px solid black;">Audio of word
                  <p style="color: black ; font-family: sans-serif; padding: 1.1rem;">
                  <audio controls src="${url[0].phonetics[0].audio}"></audio>
                  
               
                  <br>
                  </p>
                </span>

                <br>              
              </div>
            </div>
          </div>
        </div>

`;
}

clickToFetchData.addEventListener("click", () => {
  const resp = userInputWritten.value;
  dictionaryApp(resp);
});
