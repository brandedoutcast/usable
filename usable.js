let activeHost = location.host

switch (activeHost) {
    case "unsplash.com":
        let targetEl = document.getElementsByClassName("_1ltEq")[0],
            containerDiv = document.createElement("div"),
            anchorEl = document.createElement("a"),
            anchorDiv = document.createElement("div"),
            svgEl = `<svg class="_1xhtJ" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false"><path d="M0 26c0 1.7.2 3.3.6 4.9.2.9.7.9 1 0 2.1-5.3 5.5-10.3 11.1-11.3h3.3v4.4c0 2 1.2 2.6 2.6 1.4l12.8-11c.7-.6.7-1.6 0-2.3l-12.8-11c-1.4-1.3-2.6-.6-2.6 1.3v4.7c-9.6 1.6-16 9.4-16 18.9z"></path></svg>`,
            spanEl = `<span class="_3UPwX">Link</span>`

        anchorDiv.classList.add("_10F2J")
        ["_37zTg", "_1l4Hh", "_1CBrG", "_1zIyn", "xLon9", "_10F2J", "NDx0k", "_2Xklx"].forEach(c => anchorEl.classList.add(c))
        containerDiv.classList.add("_3dxKb")

        anchorDiv.appendChild(svgEl)
        anchorDiv.appendChild(spanEl)

        anchorEl.appendChild(anchorDiv)
        anchorEl.addEventListener("click", function (e) {
            e.preventDefault()

        })

        containerDiv.appendChild(anchorEl)
        break
    case "hemingwayapp.com":
        let editor = document.getElementsByClassName("hemingway-editor-components-container")[0]
        editor.style.flexBasis = "90%"
        break
    default:
        break
}
