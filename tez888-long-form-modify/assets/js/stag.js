$(document).ready(function () {

    // Parsing url
    let register_btns = $('.join-now');
    let search_params =  new URLSearchParams(window.location.search);//window.location.search;
    let affiliate = search_params.get('stag');
   
    (search_params!=='') && (register_btns.length) && register_btns.each( function() {
        $(this).attr('href', 'https://tez888.in?action=joinnow&stag='+((affiliate)?affiliate:''));
    });

});

$(document).ready(function () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });

    if (params.stag) {
		setCookie('stag', params.stag, 15)
	}

	if(params.utm_source){
		var campaignData = {
			"campaign_id": params.utm_id,
			"utm_source": params.utm_source,
			"utm_medium": params.utm_medium,
			"utm_campaign": params.utm_campaign,
			"utm_content": params.utm_content,
			"refferal_url": document.referrer,
			"campaignsignup": window.location.href,
		};
		setCookie('utm_source', JSON.stringify(campaignData), 30);
	}
});