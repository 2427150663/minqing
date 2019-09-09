;
(function () {
    var Tap = function () {
        /*样式*/
        this.conIndex = document.querySelector("#con #index");
        /*导航收缩开关*/
        this.open = document.querySelector("#open");
        /*左导航*/
        this.conLeft = document.querySelector("#con #conLeft");
        /*右内容*/
        this.conRight = document.querySelector("#con #conRight");
        /*左导航收缩后*/
        this.conLeftTwo = document.querySelector("#con #conLeftTwo");
        /*tap展开*/
        this.openTap = document.querySelectorAll("#con #conLeft .openTap");
        /*tap*/
        this.close = document.querySelectorAll("#con #conLeft .close");
        this.flag = true;
    }
    Tap.prototype = {
        init() {
            this.bindEvent();
            this.loadChange();
        },
        bindEvent() {
            this.open.addEventListener("click", this.openClick.bind(this), false);
            this.openTap[0].querySelector(".close").addEventListener("click", this.openTapClick.bind(this, 0), false);
            this.openTap[1].querySelector(".close").addEventListener("click", this.openTapClick.bind(this, 1), false);
            this.openTap[2].querySelector(".close").addEventListener("click", this.openTapClick.bind(this, 2), false);
        },
        openTapClick(i) {
            for (var j = 0; j < this.close.length; j++) {
                this.close[j].classList.remove("bor");
            }
            for (var k = 0; k < this.openTap.length; k++) {
                if (k == i) {
                    continue;
                }
                this.openTap[k].classList.add("tapChange");
                this.openTap[k].querySelector(".close .tutu").src = "img/bottom.png";
            }
            this.openTap[i].querySelector(".close").classList.add("bor");
            if (this.openTap[i].getAttribute("class").indexOf("tapChange") > -1) {
                this.openTap[i].querySelector(".close .tutu").src = "img/plp.png";
                this.openTap[i].classList.remove("tapChange");
                // console.log(0)
            } else {
                this.openTap[i].querySelector(".close .tutu").src = "img/bottom.png";
                this.openTap[i].classList.add("tapChange");
                // console.log(1)
            }
        },
        loadChange() {
            var zhi = window.localStorage.getItem("open");
            if (zhi == 0) {
                this.viewOpen();
            } else {
                this.viewClose();
            }
        },
        openClick() {
            var flag = this.flag;
            if (flag) {
                this.viewOpen();
                window.localStorage.setItem("open", 0)
            } else {
                this.viewClose();
                window.localStorage.setItem("open", 1)
            }
        },
        viewOpen() {
            this.flag = false;
            this.conIndex.classList.add("open");
            this.conRight.classList.add("open");
            this.conLeft.style.display = "none";
            this.conLeftTwo.style.display = "block";
            this.open.src = "img/menu@2x.png";
        },
        viewClose() {
            this.flag = true;
            this.conIndex.classList.remove("open");
            this.conRight.classList.remove("open");
            this.conLeft.style.display = "block";
            this.conLeftTwo.style.display = "none";
            this.open.src = "img/menu002.png";
        }
    }
    new Tap().init();
})();