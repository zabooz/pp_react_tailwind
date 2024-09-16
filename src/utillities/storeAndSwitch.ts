export const storeAndSwitch = ( storageArr:any, storageName:string, target:HTMLElement | null) => {
  
  if(target === null){ return; }
  target.innerHTML = "";

  sessionStorage.setItem(storageName, JSON.stringify(storageArr));

  const DOMElementArr: HTMLElement[] = [];


  for (let i = 0; i < storageArr.length; i++) {
    const item = storageArr[i];

    const tdPw = document.createElement("td");
    const pwId = `${item.app}${item.pwId}`;

    const tdCatch = document.createElement("td");
    const catchId = `pic${item.catchId}`;

    const tdLeft = document.createElement("td");
    const tdRight = document.createElement("td");

    const spanPwd = document.createElement("span");

    spanPwd.innerText = `${item.password}`;
    tdPw.append( spanPwd);
    // copyButton(pwId),  CLIPPY
    spanPwd.classList.add("w-100", "pwdSpan");
    tdLeft.innerHTML = `<img src="src/assets/icons/arrow.svg" id="arrowLeft" data-side="left" class="${item.app} hidden" style="transform: rotate(180deg); margin-top: -0.15rem; width: 2rem" alt="Arrow Left">`;
    tdRight.innerHTML = `<img src="src/assets/icons/arrow.svg" id="arrowRight" class="${item.app} hidden" data-side="right" style="margin-top: -0.15rem; width: 2rem" alt="Arrow Right">`;

    tdCatch.id = catchId;
    tdCatch.classList.add("tablePics");

    if (item.app === "pictureMagic") {
      tdCatch.innerHTML = `<img src="${item.catch}" id="${catchId}" alt="Your Picture" class="imgTable" style="width:2rem">`;
    } else {
      tdCatch.innerHTML = `<span>${item.catch}</span>`;
    }
    tdPw.id = pwId;
    tdPw.classList.add("d-flex", "p-0", "align-items-center", "gap-2");
    const tr = document.createElement("tr");
    tr.append(tdLeft, tdPw, tdCatch, tdRight);
    if (item.app === "pictureMagic") {
      tdCatch.innerHTML = `<img src="${item.catch}" id="${catchId}" alt="Your Picture" class="imgTable" style="width:2rem">`;
    } else {
      tdCatch.innerHTML = `<span>${item.catch}</span>`;
    }

    DOMElementArr.push(tr);
  }

  // add switch arrows to rows when more than 1 row
  let count = DOMElementArr.length;

  if (count > 1) {
    DOMElementArr.forEach((element) => {
      const arrows = element.querySelectorAll(`.${storageArr[0].app}`);
      arrows.forEach((arrow) => {
        arrow.classList.remove("hidden");
        arrow.addEventListener("click", () => {
          target!.innerHTML = "";
          if ((arrow as HTMLElement).dataset.side === "left") {
            count = (count - 1 + DOMElementArr.length) % DOMElementArr.length;
          } else {
            count = (count + 1) % DOMElementArr.length;
          }
          target!.append(DOMElementArr[count]);
        });
      });
    });
  }

  target!.append(DOMElementArr[DOMElementArr.length - 1]);
};
