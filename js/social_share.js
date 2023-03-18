
$(function(){
    let openSharectUrl = {
        twitter: "https://twitter.com/intent/tweet?text=TEXT_SELECTION&url=PAGE_URL",
        facebook: "https://www.facebook.com/sharer/sharer.php?u=PAGE_URL&quote=TEXT_SELECTION"
    }
    // 要是具体到某个元素需要设置document
    $(document).on("mouseup", function (event) {
        //鼠标抬起进，获取选择文字的字数。并根据字数，是否显示弹出层
        function htrans() {
            if (document.selection) {
                return document.selection.createRange().text; // IE
            } else {
                return window.getSelection().toString(); //标准
            }
        }
        let q = htrans();
       /*  console.log('q.length');
        console.log(q.length); */
        if (q.length <= 0) {
            $(".sharect-box").remove()
            $("#sharect-style").remove()
            return;
        }
        // .sharect-flex svg{fill:#fff;}
        if ($(".sharect-box").length == 0) {
            let urlStyle = `<style id="sharect-style">
    .sharect-box{line-height: 0; transition: all 0.2s ease-in-out 0s; background: rgba(192, 226, 255, 1); position: absolute; border-radius: 3px; }
    .sharect-box .sharect-flex{display: flex;align-items: center;}
    .sharect-box em{position: absolute; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid rgba(192, 226, 255, 1); bottom: -4px; left: 33px; width: 0px; height: 0px;}
    .sharect-flex p{display: inline-block;  cursor: pointer; transition: all 0.2s ease-in-out 0s; transform: scale(1);margin:7px}
    .sharect-flex p:hover{transform: scale(1.2);}
    </style>`
            let urlHtml = `
    <div class='sharect-box' >
        <div class="sharect-flex">
            <p class="sharect-twitter">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-twitter-2" class="at-icon at-icon-twitter" style="fill: rgb(255, 255, 255); width: 24px; height: 24px;background:#1da1f2"><title id="at-svg-twitter-2">Twitter</title><g><path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd"></path></g></svg>
            </p>
            <p class="sharect-facebook">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-facebook-1" class="at-icon at-icon-facebook" style="fill: rgb(255, 255, 255); width: 24px; height: 24px;background:#3b5998"><title id="at-svg-facebook-1">Facebook</title><g><path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill-rule="evenodd"></path></g></svg>
            </p>
        </div>
        <em></em>
    </div>`
            //$("body").append(urlStyle + urlHtml)
        }
    
        const selection = document.getSelection()
        const oRange = selection.getRangeAt(0)
        const oRect = oRange.getBoundingClientRect()
        let l = oRect.left + (oRect.width / 2) - ($(".sharect-box").width() / 2);
        let t = oRect.top + window.scrollY - $(".sharect-box").height() - 3;
        let left = l + "px"
        let top = t + "px"
        $(".sharect-box").css({
            left: left,
            top: top
        })
    })
    $(document).on("mousedown", ".sharect-twitter,.sharect-facebook", function (e) {
        e.stopPropagation()
        if ($(this).hasClass("sharect-twitter")) {
            openSharect(openSharectUrl.twitter)
        } else if ($(this).hasClass("sharect-facebook")) {
            openSharect(openSharectUrl.facebook)
        }
    });
    
    function openSharect(url) {
        url = url.replace(/PAGE_URL/, window.location.href).replace(/TEXT_SELECTION/, window.getSelection()
            .toString())
        window.open(url, "Share", "width=550, height=280")
    }
    // $(document).on("click", function () {
    //     $(".sharect-box").remove()
    //     $("#sharect-style").remove()
    // })
})
