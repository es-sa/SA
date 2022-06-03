!function(){"use strict";var e={saNodes:[],threshold:.1,setThreshold:function(e){if("string"==typeof e){if(""===(e=e.trim()))return console.warn("threshold value is empty, using default value 0.1"),.1;if(!isFinite(Number(e)))return console.warn('invalid threshold value "'.concat(e,'", using default value 0.1')),.1;e=Number(e)}return"number"!=typeof e?(console.warn('invalid threshold value "'.concat(e,'", using default value 0.1')),.1):(e>1&&(console.warn('threshold value "'.concat(e,'" cannot be greater than 1, using maximum value 1')),e=1),e)},intersection:function(){if(e.saNodes&&e.saNodes.length)for(var t=0,n=e.saNodes;t<n.length;t++){var a=n[t];s.observe(a)}},init:function(s){var t=document.querySelectorAll("[data-sa]");if(!t||0===t.length)throw new Error("No matching elements found");e.saNodes=t,void 0!==s&&(e.threshold=e.setThreshold(s)),e.intersection()}},s=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target;if(!(t instanceof HTMLDivElement))return!1;"false"===t.dataset.saOnce?e.isIntersecting?t.classList.add("saShow"):!e.isIntersecting&&t.classList.contains("saShow")&&t.classList.remove("saShow"):e.isIntersecting&&(t.classList.add("saShow"),s.unobserve(t))}))}),{threshold:e.threshold})}();