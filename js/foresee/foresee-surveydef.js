FSR.surveydefs = [{
    name: 'browse',
	site: 'nintendo_main',
    invite: {
        when: 'onentry',
		content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}nintendo_main.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><strong>Thank you for visiting our site</strong>.<br><br><strong>Upon leaving our website,</strong> you may be selected to take part in a customer satisfaction survey. This survey is conducted by an independent company, ForeSee Results.<br><br>The feedback obtained from this survey will help us to enhance our website. All results are strictly confidential.<br><br></div></div></BODY></HTML>'
    },
    pop: {
        when: 'later'
    },
	tracker:{
		url: 'tracker_m.html'
	},
    criteria: {
        sp: 1,
        lf: 3
    },
    include: {
        urls: ['nintendo.com']
    }
},{
   	name: 'browse',
	site: 'nintendo_wii',
    invite: {
        when: 'onentry',
		content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}nintendo_wii.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><strong>Thank you for visiting our site.</strong><br><br><strong>Upon leaving our website,</strong> you may be selected to take part in a customer satisfaction survey. This survey is conducted by an independent company, ForeSee Results.<br><br>The feedback obtained from this survey will help us to enhance our website. All results are strictly confidential.<br><br></div></div></BODY></HTML>'
    },
    pop: {
        when: 'later'
    },
	tracker:{
		url: 'tracker_w.html'
	},
    criteria: {
        sp: 25,
        lf: 3
    },
    include: {
        urls: ['wii.com']
    }
},{
    name: 'browse',
	site: 'nintendo_ds',
    invite: {
        when: 'onentry',
		content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}nintendo_ds.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><strong>Thank you for visiting our site.</strong><br><br><strong>Upon leaving our website,</strong> you may be selected to take part in a customer satisfaction survey. This survey is conducted by an independent company, ForeSee Results.<br><br>The feedback obtained from this survey will help us to enhance our website. All results are strictly confidential.<br><br></div></div></BODY></HTML>'
    },
    pop: {
        when: 'later'
    },
	tracker:{
		url: 'tracker_d.html'
	},
    criteria: {
        sp: 5,
        lf: 3
    },
    include: {
        urls: ['nintendods.com']
    }
}];
FSR.properties = {
    repeatdays: 90,
    
    language: {
        locale: 'en'
    },
    
    exclude: {
        local: [],
        referer: []
    },
    
    invite: {      
        width: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
		timeout: 0,
        buttons: {
            accept: 'Continue',
            decline: 'No thanks'
        },
        hideOnClick: false,
		css: 'foresee-dhtml.css'
    },
    
    tracker: {
        width: '500',
        height: '325',
        timeout: 3,
        url: 'tracker.html'
    },
    
    survey: {
        width: 550,
        height: 600,
        loading: true
    },
    
    qualifier: {
        location: 'local',
        width: '500',
        height: '300',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        buttons: {
            accept: 'Continue'
        },
        hideOnClick: false,
		css: false
    },
    
    cancel: {
        url: 'cancel.html',
        width: '500',
        height: '300'
    },

    loading: {
        url: 'survey_loading.html'
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: false,
        tracker: true
    },
    
    meta: {
        referer: true,
        terms: true,
        ref_url: true,
		url_params: false
    },
	
	previous: false,
	
    mode: 'hybrid'
};
