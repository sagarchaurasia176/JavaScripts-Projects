const searchField = document.querySelector("#default-search");
const clickToSearch = document.querySelector("#clickToSearch");
const githubImg = document.querySelector("#githubImg");
const GithubUserName = document.querySelector("#GithubUserName");
const repoNumber = document.querySelector("#repoNumber");
const FollowingNumber = document.querySelector("#FollowingNumber");
const FollowersNumber = document.querySelector("#FollowersNumber");
const githubDataContainer = document.querySelector(".main");

const githubData = async(username) => {
    const githubApi = await fetch(`https://api.github.com/users/` + username);
    const data = await githubApi.json();

    //its required to create one var if you want to implement html tag after you will convert into its main container

    const container = `

     <div class="grid grid-cols-2 items-center bg-white border border-gray-200 rounded-lg shadow   dark:border-gray-700 p-4 dark:bg-gray-800 ">
     <img class="object-cover rounded-t-lg h-64  md:rounded-none md:rounded-l-lg" src="${data.avatar_url}" id="githubImg">

     <div class="justify-between p-4 leading-normal">
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" id="GithubUserName">${data.login}</h5>
         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.bio}</p>
         <div class="w-96  p-5 grid grid-cols-3 bg-slate-900  shadow-none">
             <p class="mb-3 text-center space-x-2 h-auto pl-2 flex justify-center font-normal text-gray-700 dark:text-gray-400">
                 Repos  &nbsp;
                 <strong class="inline-block max-w-md text-white" id="repoNumber">
                 ${data.public_repos}
                 </strong>
             </p>
             <p class="mb-3 text-center space-x-2 h-auto pl-2 flex justify-center font-normal text-gray-700 dark:text-gray-400">
                 Following &nbsp;
                 <strong class="inline-block max-w-md text-white" id="FollowingNumber">
                 ${data.following}
                 </strong>
             </p>
             <p class="mb-3 text-center space-x-2 h-auto pl-2 flex justify-center font-normal text-gray-700 dark:text-gray-400">
                 Followers &nbsp;
                 <strong class="inline-block max-w-md text-white" id="FollowersNumber">
                 ${data.followers}
                 </strong>
             </p>
         </div>
     </div>
     <a class="text-white translate-x-5 p-2" href="${data.html_url}">let's Check  My 🙃Profile</a>
 </div>
 
     `;

    githubDataContainer.innerHTML = container;
};

//  userclickfunctions
clickToSearch.addEventListener("click", (e) => {
    e.preventDefault();

    let userInputFetched = searchField.value.trim();

    githubData(userInputFetched);
});