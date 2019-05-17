var Selector = "a[target='_blank']";

function addNoopener() {
    var links = [];
    var blankTargets = document.querySelectorAll(Selector);
    [].forEach.call(blankTargets, function(target) {
        if (target.href === "javascript:void(0)") {
            return;
        }
        if (target.hostname === window.location.hostname) {
            return;
        }
        if (target.hasAttribute("rel")) {
            var found = target.rel.split(" ").some(function(rel) {
                return ["noopener"].indexOf(rel.toLowerCase()) > -1;
            });
            if (found == 0) {
                target.rel += " noopener";
                links.push(target.href);
            }
        } else {
            target.rel = "noopener";
            links.push(target.href);
        }
    });
}

addNoopener();
