var mobiles = {
    Apple: {
        iphone_8: {
            name: "iphone 8",
            imgSrc: "images/mobiles/Apple/iphone_8/",
            price: "$205.99",
            ram: "3GB",
            screen: "5 Inches",
            color: ["black", "gold", "red", "white"],
        },
        iphone_10: {
            imgSrc: "images/mobiles/Apple/iphone_10/",
            name: "iphone 10",
            price: "$810.00",
            ram: "4GB",
            screen: "6.1 Inches",
            color: ["grey", "orange", "red", "white"]
        },
        iphone_11: {
            imgSrc: "images/mobiles/Apple/iphone_11/",
            name: "iphone 11",
            price: "$1229.99",
            ram: "6GB",
            screen: "6.1 Inches",
            color: ["black", "red", "white", "yellow"],
        },
        iphone_12: {
            imgSrc: "images/mobiles/Apple/iphone_12/",
            name: "iphone 12",
            price: "$1847.00",
            ram: "8GB",
            screen: "6.1 Inches",
            color: ["blue", "gold", "grey", "white"],
        }
    },
    Infinix: {
        note_10: {
            imgSrc: "images/mobiles/Infinix/note_10/",
            name: "note 10",
            price: "$349.00",
            ram: "4GB",
            screen: "6 Inches",
            color: ["blue", "white"],
        },
        note_11: {
            imgSrc: "images/mobiles/Infinix/note_11/",
            name: "note 11",
            price: "$400.00",
            ram: "6GB",
            screen: "6.4 Inches",
            color: ["blue", "grey"],
        },
        note_12: {
            imgSrc: "images/mobiles/Infinix/note_12/",
            name: "note 12",
            price: "$555.99",
            ram: "8GB",
            screen: "6.5 Inches",
            color: ["blue", "white"],
        },
        note_13: {
            imgSrc: "images/mobiles/Infinix/note_13/",
            name: "note 13",
            price: "$670.00",
            ram: "12GB",
            screen: "6.4 Inches",
            color: ["blue", "white"],
        }
    },
    Oppo: {
        a_15: {
            imgSrc: "images/mobiles/Oppo/a_15/",
            name: "a 15",
            price: "$250.00",
            ram: "3GB",
            screen: "5.6 Inches",
            color: ["black", "blue", "light-blue"],
        },
        a_53: {
            imgSrc: "images/mobiles/Oppo/a_53/",
            name: "a 53",
            price: "$330.00",
            ram: "4GB",
            screen: "5.8 Inches",
            color: ["black", "blue", "white"],
        },
        a_54: {
            imgSrc: "images/mobiles/Oppo/a_54/",
            name: "a 54",
            price: "$500.00",
            ram: "6GB",
            screen: "6 Inches",
            color: ["black", "blue"],
        },
        a_95: {
            imgSrc: "images/mobiles/Oppo/a_95/",
            name: "a 95",
            price: "$550.00",
            ram: "8GB",
            screen: "6.4 Inches",
            color: ["black", "blue", "silver"],
        }
    },
    Realme: {
        realme_6: {
            imgSrc: "images/mobiles/Realme/realme_6/",
            name: "realme 6",
            price: "$400.00",
            ram: "6GB",
            screen: "6 Inches",
            color: ["blue", "gold", "Purple"],
        },
        realme_7: {
            imgSrc: "images/mobiles/Realme/realme_7/",
            name: "realme 7",
            price: "$450.00",
            ram: "8GB",
            screen: "6.2 Inches",
            color: ["blue", "white"],
        },
        realme_8: {
            imgSrc: "images/mobiles/Realme/realme_8/",
            name: "realme 8",
            price: "$500.00",
            ram: "8GB",
            screen: "6.4 Inches",
            color: ["blue", "yellow"],
        },
        realme_9: {
            imgSrc: "images/mobiles/Realme/realme_9/",
            name: "realme 9",
            price: "$600.00",
            ram: "12GB",
            screen: "6.4 Inches",
            color: ["black", "blue", "green"],
        }
    },
    Samsung: {
        a_73: {
            imgSrc: "images/mobiles/Samsung/a_73/",
            name: "a 73",
            price: "$400.00",
            ram: "6GB",
            screen: "5.6 Inches",
            color: ["black", "blue", "peachpuff", "white"],
        },
        galaxy_s_22: {
            imgSrc: "images/mobiles/Samsung/galaxy_s_22/",
            name: "galaxy s 22",
            price: "$1220.00",
            ram: "12GB",
            screen: "6.5 Inches",
            color: ["blue", "gold", "grey", "purple"],
        },
        galaxy_z_flip: {
            imgSrc: "images/mobiles/Samsung/galaxy_z_flip/",
            name: "galaxy z flip",
            price: "$1000.00",
            ram: "12GB",
            screen: "6.2 Inches",
            color: ["black", "gold", "purple"],
        },
        s_20_ultra: {
            imgSrc: "images/mobiles/Samsung/s_20_ultra/",
            name: "s 20 ultra",
            price: "$2200.00",
            ram: "16GB",
            screen: "6.4 Inches",
            color: ["black", "grey", "white"],
        }
    },
}
var input_val = document.getElementById("input");

for (var key in mobiles) {
    document.getElementById("main").innerHTML += `
    <h1 class="brandName">${key}</h1>
    <div class="${key}">
    </div>
    `
    for (var key2 in mobiles[key]) {
        document.getElementsByClassName(key)[0].innerHTML += `
        <div class="card">
                <div class="card-image">
                    <img width="70%" height="100%" src="${key, mobiles[key][key2].imgSrc}${key, mobiles[key][key2].color[0]}.png">
                </div>
                <div class="card-desc">
                    <p id="name">${key, mobiles[key][key2].name}</p>
                    <p id="price">${key, mobiles[key][key2].price}</p>
                </div>
            </div>
        `
    }
}


function letterPressed() {
    var lengthOfList = document.getElementsByClassName("search-list")[0].children[0].children;
    var inp = input_val.value.toLowerCase();
    if (document.getElementById("options").selectedIndex !== 0) {
        for (i = 0; i < lengthOfList.length; i++) {
            if (inp === document.getElementById(`list${i}`).innerHTML) {
                document.getElementById(`list${i}`).classList.add("hidden");
            }
            else if (inp === document.getElementById(`list${i}`).innerHTML.slice(0, inp.length)) {
                document.getElementById(`list${i}`).classList.remove("hidden")
            } else {
                document.getElementById(`list${i}`).classList.add("hidden")
            }
            for (j = 0; j < lengthOfList[i].innerHTML.length; j++) {
                if (inp === document.getElementById(`list${i}`).innerHTML.slice(j, inp.length + j)) {
                    document.getElementById(`list${i}`).classList.remove("hidden")
                    break;
                }
            }
        }
    }
}

function showList() {
    document.getElementsByClassName("search-list")[0].classList.remove("hide");
}

function hideList() {
    document.getElementsByClassName("search-list")[0].classList.add("hide");
}

function search_data() {
    input_val.value = event.target.innerHTML;
    document.getElementsByClassName("search-list")[0].classList.add("hide");
}

var pushingOptions = document.getElementById("options")
var gettingDropdownList = document.getElementsByClassName("search-list")[0].children[0];
var arr = ["Selected"];
var count = 0;
for (var key in mobiles) {
    arr.push(key)
    pushingOptions.innerHTML += `
    <option value=${key}>${key}</option>
    `
}

function selectOption() {
    if (document.getElementById("options").selectedIndex !== 0) {
        count = 0;
        input_val.removeAttribute("disabled", "");
        var mobName = arr[document.getElementById("options").selectedIndex];
        input_val.value = "";
        gettingDropdownList.innerHTML = "";
        for (var key in mobiles[mobName]) {
            gettingDropdownList.innerHTML += `
        <li id="list${count}" onclick="search_data()">${mobiles[mobName][key].name}</li>
        `
            count = count + 1;
        }
    } else {
        input_val.setAttribute("disabled", "");
        input_val.value = "";
        gettingDropdownList.innerHTML = "";
        count = 0;
    }
}

var colors = "";
var colorName = "";
var colorPath = "";

function searched() {
    if (input_val.value !== "") {
        document.getElementById("results-card").innerHTML = "";
    }
    if (input_val.value !== "") {
        var selectedPhone = arr[document.getElementById("options").selectedIndex]
        document.getElementById("main").classList.add("hidden");
        document.getElementsByClassName("result")[0].classList.remove("hidden");
        // for (i = 0; i < input_val.value.length; i++) {
        //     if (input_val[i] === " ") {

        //     }
        // }
        var nameChanged = input_val.value.replaceAll(" ", "_");
        if (mobiles[selectedPhone][nameChanged] !== undefined) {
            for (i = 0; i < mobiles[selectedPhone][nameChanged].color.length; i++) {
                colorName = mobiles[selectedPhone][nameChanged].color[i];
                colorPath = mobiles[selectedPhone][nameChanged].imgSrc;
                colors += `<button onclick="mobileImgChange(value)" value="${colorName},${colorPath}" style="background: ${mobiles[selectedPhone][nameChanged].color[i]};" id="${colorPath}"></button>`;
            }
            console.log(mobiles[selectedPhone][nameChanged].name, input_val.value);

            document.getElementById("results-card").innerHTML += `
            <div class="search-card">
                    <div class="image">
                        <img width="70%" height="100%" src="${mobiles[selectedPhone][nameChanged].imgSrc + mobiles[selectedPhone][nameChanged].color[0]}.png">
                    </div>
                    <div class="desc">
                        <ul>
                            <li style="text-transform: capitalize;" id="name">${mobiles[selectedPhone][nameChanged].name}</li>
                            <li id="price">${mobiles[selectedPhone][nameChanged].price}</li>
                            <li id="ram">Ram : ${mobiles[selectedPhone][nameChanged].ram}</li>
                            <li id="storage">
                                <div>Storage : 64GB</div>
                                <div id="storage-btn">
                                    <button onclick="chngeBtn()" class="active-btn">64GB</button>
                                    <button onclick="chngeBtn()">128GB</button>
                                </div>
                            </li>
                            <li id="screen">Screen Size : ${mobiles[selectedPhone][nameChanged].screen}</li>
                            <li id="color">
                                ${colors}
                            </li >
                        </ul >
                    </div >
                </div >
        `
        }
        else {
            document.getElementById("results-card").innerHTML += `
            <div id="not_found">
            <h3 id="heading_1">"${input_val.value}"</h3>
            <h2 id="heading_2">Not Found</h2>
            </div>
            `
        }
        input_val.value = "";
    }
    colors = "";
    colorName = "";
    colorPath = "";
}

function mobileImgChange(color) {
    var arr2 = color.split(",")
    if (arr2[0] === "gold") {
        arr2.splice(0, 1, "golden")
    } else if (arr2[0] === "peachpuff") {
        arr2.splice(0, 1, "peach")
    }
    event.target.parentNode.parentNode.parentNode.previousElementSibling.children[0].src = arr2[1] + arr2[0] + ".png";
}

function chngeBtn() {
    if (event.target.classList.contains("active-btn")) {
    } else {
        event.target.classList.add("active-btn");
        if (event.target.previousElementSibling) {
            event.target.parentNode.previousElementSibling.innerHTML = "Storage : 128GB";
            event.target.previousElementSibling.classList.remove("active-btn");
            event.target.classList.add("active-btn");
        }
        else {
            event.target.parentNode.previousElementSibling.innerHTML = "Storage : 64GB";
            event.target.classList.add("active-btn")
            event.target.nextElementSibling.classList.remove("active-btn")
        }
    }
}