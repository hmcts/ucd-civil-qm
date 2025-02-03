//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// ROUTES FOR CLAIMANT JOURNEY

// CONTACT THE COURT - WHAT DO YOU WANT TO DO? 

// for a

router.post('/contact-the-court', function(request, response) {

    var contact = request.session.data['whatDoYouWant']
    if (contact == "01-request"){
        response.redirect("claimant/a/001-01-gen-app-start")
    } else if (contact == "02-get-update"){
        response.redirect("claimant/a/002-00-get-update")
    } else if (contact == "03-send-update"){
        response.redirect("claimant/a/003-00-send-update")
    } else if (contact == "04-documents"){
        response.redirect("claimant/a/004-00-send-documents")
    } else if (contact == "05-problems"){
        response.redirect("claimant/a/005-00-solve-problem")
    } else if (contact == "06-hearing-details"){
        response.redirect("claimant/a/006-00-update-hearing")
    } else if (contact == "07-fee"){
        response.redirect("claimant/a/007-00-pay-fee")
    } else if (contact == "08-correspondence"){
        response.redirect("claimant/a/0000-raise-query")
    } else if (contact == "09-followup"){
        response.redirect("claimant/a/009-follow-up")
    } else if (contact == "10-something-else"){
        response.redirect("claimant/a/0000-raise-query")
    } else {
        response.redirect("/")
    }
})


// for b 

router.post('/contact-the-court-b', function(request, response) {

    var contact = request.session.data['whatDoYouWant']
    if (contact == "01-request"){
        response.redirect("claimant/b/001-01-gen-app-start")
    } else if (contact == "02-get-update"){
        response.redirect("claimant/b/002-00-get-update")
    } else if (contact == "03-send-update"){
        response.redirect("claimant/b/003-00-send-update")
    } else if (contact == "04-documents"){
        response.redirect("claimant/b/004-00-send-documents")
    } else if (contact == "05-problems"){
        response.redirect("claimant/b/005-00-solve-problem")
    } else if (contact == "06-hearing-details"){
        response.redirect("claimant/b/006-00-update-hearing")
    } else if (contact == "07-fee"){
        response.redirect("claimant/b/007-00-pay-fee")
    } else if (contact == "08-correspondence"){
        response.redirect("claimant/b/0000-raise-query")
    } else if (contact == "09-followup"){
        response.redirect("claimant/b/009-follow-up")
    } else if (contact == "10-something-else"){
        response.redirect("claimant/b/0000-raise-query")
    } else {
        response.redirect("/")
    }
})

// for c

router.post('/contact-the-court-c', function(request, response) {

    var contact = request.session.data['whatDoYouWant']
    if (contact == "01-request"){
        response.redirect("claimant/c/001-01-gen-app-start")
    } else if (contact == "02-get-update"){
        response.redirect("claimant/c/002-00-get-update")
    } else if (contact == "03-send-update"){
        response.redirect("claimant/c/003-00-send-update")
    } else if (contact == "04-documents"){
        response.redirect("claimant/c/004-00-send-documents")
    } else if (contact == "05-problems"){
        response.redirect("claimant/c/005-00-solve-problem")
    } else if (contact == "06-hearing-details"){
        response.redirect("claimant/c/006-00-update-hearing")
    } else if (contact == "07-fee"){
        response.redirect("claimant/c/007-00-pay-fee")
    } else if (contact == "08-correspondence"){
        response.redirect("claimant/c/0000-raise-query")
    } else if (contact == "09-followup"){
        response.redirect("claimant/c/009-follow-up")
    } else if (contact == "10-something-else"){
        response.redirect("claimant/c/0000-raise-query")
    } else {
        response.redirect("/")
    }
})


// for d

router.post('/contact-the-court-d', function(request, response) {

    var contact = request.session.data['whatDoYouWant']
    if (contact == "01-request"){
        response.redirect("claimant/d/001-01-gen-app-start")
    } else if (contact == "02-get-update"){
        response.redirect("claimant/d/002-00-get-update")
    } else if (contact == "03-send-update"){
        response.redirect("claimant/d/003-00-send-update")
    } else if (contact == "04-documents"){
        response.redirect("claimant/d/004-00-send-documents")
    } else if (contact == "05-problems"){
        response.redirect("claimant/d/005-00-solve-problem")
    } else if (contact == "06-hearing-details"){
        response.redirect("claimant/d/006-00-update-hearing")
    } else if (contact == "07-fee"){
        response.redirect("claimant/d/007-00-pay-fee")
    } else if (contact == "08-correspondence"){
        response.redirect("claimant/d/0000-raise-query")
    } else if (contact == "09-followup"){
        response.redirect("claimant/d/009-follow-up")
    } else if (contact == "10-something-else"){
        response.redirect("claimant/d/0000-raise-query")
    } else {
        response.redirect("/")
    }
})


// MAKE AN APPLICATION - SELECT AN APPLICATION 

// for a

router.post('/make-gen-app', function(request, response) {

    var contact = request.session.data['selectApp']
    if (contact == "application-4"){
        response.redirect("claimant/a/001-02-change-start")
    } else if (contact == "application-5"){
        response.redirect("")
    } else {
        response.redirect("")
    }
})


// for b

router.post('/make-gen-app-b', function(request, response) {

    var contact = request.session.data['selectApp']
    if (contact == "application-4"){
        response.redirect("claimant/b/001-01-gen-app-start")
    } else if (contact == "application-5"){
        response.redirect("claimant/b/001-02-change-start")
    } else {
        response.redirect("claimant/b/001-01-gen-app-start")
    }
})

// for c

router.post('/make-gen-app-c', function(request, response) {

    var contact = request.session.data['selectApp']
    if (contact == "application-4"){
        response.redirect("claimant/c/001-01-gen-app-start")
    } else if (contact == "application-5"){
        response.redirect("claimant/c/001-02-change-start")
    } else {
        response.redirect("claimant/c/001-01-gen-app-start")
    }
})

// for d

router.post('/make-gen-app-d', function(request, response) {

    var contact = request.session.data['selectApp']
    if (contact == "application-4"){
        response.redirect("claimant/d/001-01-gen-app-start")
    } else if (contact == "application-5"){
        response.redirect("claimant/d/001-02-change-start")
    } else {
        response.redirect("claimant/d/001-01-gen-app-start")
    }
})


// HAVE OTHER PARTIES AGREED TO THIS APPLICATION?


// for a

router.post('/parties-agreed', function(request, response) {

    var contact = request.session.data['partiesAgreed']
    if (contact == "Yes"){
        response.redirect("claimant/a/001-03-fee-info")
    } else {
        response.redirect("claimant/a/001-02-extra")
    }
})

// route for inform other party 

router.post('/parties-agreed-b', function(request, response) {

    var contact = request.session.data['partiesAgreed']
    if (contact == "Yes"){
        response.redirect("claimant/b/001-03-fee-info")
    } else {
        response.redirect("claimant/b/001-02-extra")
    }
})

// for c

router.post('/parties-agreed-c', function(request, response) {

    var contact = request.session.data['partiesAgreed']
    if (contact == "Yes"){
        response.redirect("claimant/c/001-03-fee-info")
    } else {
        response.redirect("claimant/c/001-02-extra")
    }
})


// for d

router.post('/parties-agreed-d', function(request, response) {

    var contact = request.session.data['partiesAgreed']
    if (contact == "Yes"){
        response.redirect("claimant/d/001-03-fee-info")
    } else {
        response.redirect("claimant/d/001-02-extra")
    }
})





// GET AN UPDATE ON MY CASE - WHAT DO YOU WANT TO DO?

// for a

router.post('/get-update-from-court', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWant']
    if (contact == "01-get-update-after"){
        response.redirect("claimant/a/002-01-get-update-after")
    } else if (contact == "02-get-general-update"){
        response.redirect("claimant/a/002-02-get-general-update")
    } else if (contact == "03-understand-claim-not-paid"){
        response.redirect("claimant/a/002-03-understand-claim-not-paid")
    } else if (contact == "04-understand-judgment-not-paid"){
        response.redirect("claimant/a/002-04-understand-judgment-not-paid")
    }
})

// for b


router.post('/get-update-from-court-b', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWant']
    if (contact == "01-get-update-after"){
        response.redirect("claimant/b/002-01-get-update-after")
    } else if (contact == "02-get-general-update"){
        response.redirect("claimant/b/002-02-get-general-update")
    } else if (contact == "03-understand-claim-not-paid"){
        response.redirect("claimant/b/002-03-understand-claim-not-paid")
    } else if (contact == "04-understand-judgment-not-paid"){
        response.redirect("claimant/b/002-04-understand-judgment-not-paid")
    }
})

// for c


router.post('/get-update-from-court-c', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWant']
    if (contact == "01-get-update-after"){
        response.redirect("claimant/c/002-01-get-update-after")
    } else if (contact == "02-get-general-update"){
        response.redirect("claimant/c/002-02-get-general-update")
    } else if (contact == "03-understand-claim-not-paid"){
        response.redirect("claimant/c/002-03-understand-claim-not-paid")
    } else if (contact == "04-understand-judgment-not-paid"){
        response.redirect("claimant/c/002-04-understand-judgment-not-paid")
    }
})



// for d


router.post('/get-update-from-court-d', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWant']
    if (contact == "01-get-update-after"){
        response.redirect("claimant/d/002-01-get-update-after")
    } else if (contact == "02-get-general-update"){
        response.redirect("claimant/d/002-02-get-general-update")
    } else if (contact == "03-understand-claim-not-paid"){
        response.redirect("claimant/d/002-03-understand-claim-not-paid")
    } else if (contact == "04-understand-judgment-not-paid"){
        response.redirect("claimant/d/002-04-understand-judgment-not-paid")
    }
})

// SEND AN UPDATE ON MY CASE - WHAT DO YOU WANT TO DO?

// for a

router.post('/send-update-to-court', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWantToSend']
    if (contact == "01-about-paid"){
        response.redirect("claimant/a/003-01-update")
    } else if (contact == "02-settle"){
        response.redirect("claimant/a/003-02-settle")
    } else if (contact == "03-amend"){
        response.redirect("claimant/a/003-03-amend")
    } else if (contact == "04-ended"){
        response.redirect("claimant/a/003-04-claim-ended")
    }   else if (contact == "05-something-else"){
        response.redirect("claimant/a/0000-raise-query")
    }   
    
})

// for b
router.post('/send-update-to-court-b', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWantToSend']
    if (contact == "01-about-paid"){
        response.redirect("claimant/b/003-01-update")
    } else if (contact == "02-settle"){
        response.redirect("claimant/b/003-02-settle")
    } else if (contact == "03-amend"){
        response.redirect("claimant/b/003-03-amend")
    } else if (contact == "04-ended"){
        response.redirect("claimant/b/003-04-claim-ended")
    }   else if (contact == "05-something-else"){
        response.redirect("claimant/b/0000-raise-query")
    }   
    
})

// for c
router.post('/send-update-to-court-c', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWantToSend']
    if (contact == "01-about-paid"){
        response.redirect("claimant/c/003-01-update")
    } else if (contact == "02-settle"){
        response.redirect("claimant/c/003-02-settle")
    } else if (contact == "03-amend"){
        response.redirect("claimant/c/003-03-amend")
    } else if (contact == "04-ended"){
        response.redirect("claimant/c/003-04-claim-ended")
    }   else if (contact == "05-something-else"){
        response.redirect("claimant/c/0000-raise-query")
    }   
    
})


// for d
router.post('/send-update-to-court-d', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWantToSend']
    if (contact == "01-about-paid"){
        response.redirect("claimant/d/003-01-update")
    } else if (contact == "02-settle"){
        response.redirect("claimant/d/003-02-settle")
    } else if (contact == "03-amend"){
        response.redirect("claimant/d/003-03-amend")
    } else if (contact == "04-ended"){
        response.redirect("claimant/d/003-04-claim-ended")
    }   else if (contact == "05-something-else"){
        response.redirect("claimant/d/0000-raise-query")
    }   
    
})



// SEND DOCUMENTS - WHAT DO YOU WANT TO DO?

// for a

router.post('/send-documents', function(request, response) {

    var contact = request.session.data['sendDocs']
    if (contact == "01-enf"){
        response.redirect("claimant/a/004-01-enforcement")
    } else if (contact == "02-claim"){
        response.redirect("claimant/a/004-02-claim")
    } else if (contact == "03-not"){
        response.redirect("claimant/a/004-03-evidence")
    }   
})


// for b
router.post('/send-documents-b', function(request, response) {

    var contact = request.session.data['sendDocs']
    if (contact == "01-enf"){
        response.redirect("claimant/b/004-01-enforcement")
    } else if (contact == "02-claim"){
        response.redirect("claimant/b/004-02-claim")
    } else if (contact == "03-not"){
        response.redirect("claimant/b/004-03-evidence")
    }   
})

// for c
router.post('/send-documents-c', function(request, response) {

    var contact = request.session.data['sendDocs']
    if (contact == "01-enf"){
        response.redirect("claimant/c/004-01-enforcement")
    } else if (contact == "02-claim"){
        response.redirect("claimant/c/004-02-claim")
    } else if (contact == "03-not"){
        response.redirect("claimant/c/004-03-evidence")
    }   
})

// for d
router.post('/send-documents-d', function(request, response) {

    var contact = request.session.data['sendDocs']
    if (contact == "01-enf"){
        response.redirect("claimant/d/004-01-enforcement")
    } else if (contact == "02-claim"){
        response.redirect("claimant/d/004-02-claim")
    } else if (contact == "03-not"){
        response.redirect("claimant/d/004-03-evidence")
    }   
})


// SOLVE A PROBLEM I AM HAVING - WHAT ARE YOU TRYING TO DO?

// for a 

router.post('/solve-problems', function(request, response) {

    var contact = request.session.data['solveProblems']
    if (contact == "01-submit"){
        response.redirect("claimant/a/005-01-submit-response")
    } else if (contact == "02-see"){
        response.redirect("claimant/a/005-02-see-claim")
    } else if (contact == "03-view"){
        response.redirect("claimant/a/005-03-view-docs")
    } else if (contact == "05-something-else"){
        response.redirect("claimant/a/0000-raise-query")
    }   
})

// for b

router.post('/solve-problems-b', function(request, response) {

    var contact = request.session.data['solveProblems']
    if (contact == "01-submit"){
        response.redirect("claimant/b/005-01-submit-response")
    } else if (contact == "02-see"){
        response.redirect("claimant/b/005-02-see-claim")
    } else if (contact == "03-view"){
        response.redirect("claimant/b/005-03-view-docs")
    } else if (contact == "05-something-else"){
        response.redirect("claimant/b/0000-raise-query")
    }   
})


// for c

router.post('/solve-problems-c', function(request, response) {

    var contact = request.session.data['solveProblems']
    if (contact == "01-submit"){
        response.redirect("claimant/c/005-01-submit-response")
    } else if (contact == "02-see"){
        response.redirect("claimant/c/005-02-see-claim")
    } else if (contact == "03-view"){
        response.redirect("claimant/c/005-03-view-docs")
    } else if (contact == "05-something-else"){
        response.redirect("claimant/c/0000-raise-query")
    }   
})


// for d

router.post('/solve-problems-d', function(request, response) {

    var contact = request.session.data['solveProblems']
    if (contact == "01-submit"){
        response.redirect("claimant/d/005-01-submit-response")
    } else if (contact == "02-see"){
        response.redirect("claimant/d/005-02-see-claim")
    } else if (contact == "03-view"){
        response.redirect("claimant/d/005-03-view-docs")
    } else if (contact == "05-something-else"){
        response.redirect("claimant/d/0000-raise-query")
    }   
})

// MANAGE HEARING DETAILS - WHAT DO YOU NEED TO DO?

// for a 
router.post('/update-hearing', function(request, response) {

    var contact = request.session.data['updateSend']
    if (contact == "01-change-date"){
        response.redirect("claimant/a/006-01-change-date")
    } else if (contact == "02-change-details"){
        response.redirect("claimant/a/006-02-change-details")
    } else if (contact == "03-ask-help"){
        response.redirect("claimant/a/006-03-ask-help")
    } else if (contact == "04-something-else"){
        response.redirect("claimant/a/0000-raise-query")
    }   
})

// for b
router.post('/update-hearing-b', function(request, response) {

    var contact = request.session.data['updateSend']
    if (contact == "01-change-date"){
        response.redirect("claimant/b/006-01-change-date")
    } else if (contact == "02-change-details"){
        response.redirect("claimant/b/006-02-change-details")
    } else if (contact == "03-ask-help"){
        response.redirect("claimant/b/006-03-ask-help")
    } else if (contact == "04-something-else"){
        response.redirect("claimant/b/0000-raise-query")
    }   
})


// for c
router.post('/update-hearing-c', function(request, response) {

    var contact = request.session.data['updateSend']
    if (contact == "01-change-date"){
        response.redirect("claimant/c/006-01-change-date")
    } else if (contact == "02-change-details"){
        response.redirect("claimant/c/006-02-change-details")
    } else if (contact == "03-ask-help"){
        response.redirect("claimant/c/006-03-ask-help")
    } else if (contact == "04-something-else"){
        response.redirect("claimant/c/0000-raise-query")
    }   
})


// for d
router.post('/update-hearing-b', function(request, response) {

    var contact = request.session.data['updateSend']
    if (contact == "01-change-date"){
        response.redirect("claimant/d/006-01-change-date")
    } else if (contact == "02-change-details"){
        response.redirect("claimant/d/006-02-change-details")
    } else if (contact == "03-ask-help"){
        response.redirect("claimant/d/006-03-ask-help")
    } else if (contact == "04-something-else"){
        response.redirect("claimant/d/0000-raise-query")
    }   
})

//
//
//
//
//
//
//
//
//
//
//
//
//

// ROUTES FOR DEFENDANT JOURNEY

// CONTACT THE COURT - WHAT DO YOU WANT TO DO? 

// for a

router.post('/contact-the-court--a', function(request, response) {

    var contact = request.session.data['whatDoYouWant']
    if (contact == "01-request"){
        response.redirect("defendant/a/001-01-gen-app-start")
    } else if (contact == "02-get-update"){
        response.redirect("defendant/a/002-00-get-update")
    } else if (contact == "03-send-update"){
        response.redirect("defendant/a/003-00-send-update")
    } else if (contact == "04-documents"){
        response.redirect("defendant/a/004-00-send-documents")
    } else if (contact == "05-problems"){
        response.redirect("defendant/a/005-00-solve-problem")
    } else if (contact == "06-hearing-details"){
        response.redirect("defendant/a/006-00-update-hearing")
    } else if (contact == "07-fee"){
        response.redirect("defendant/a/007-00-pay-fee")
    } else if (contact == "08-correspondence"){
        response.redirect("defendant/a/0000-raise-query")
    } else if (contact == "09-followup"){
        response.redirect("defendant/a/009-follow-up")
    } else if (contact == "10-something-else"){
        response.redirect("defendant/a/0000-raise-query")
    } else {
        response.redirect("/")
    }
})


// for b 

router.post('/contact-the-court--b', function(request, response) {

    var contact = request.session.data['whatDoYouWant']
    if (contact == "01-request"){
        response.redirect("defendant/b/001-01-gen-app-start")
    } else if (contact == "02-get-update"){
        response.redirect("defendant/b/002-00-get-update")
    } else if (contact == "03-send-update"){
        response.redirect("defendant/b/003-00-send-update")
    } else if (contact == "04-documents"){
        response.redirect("defendant/b/004-00-send-documents")
    } else if (contact == "05-problems"){
        response.redirect("defendant/b/005-00-solve-problem")
    } else if (contact == "06-hearing-details"){
        response.redirect("defendant/b/006-00-update-hearing")
    } else if (contact == "07-fee"){
        response.redirect("defendant/b/007-00-pay-fee")
    } else if (contact == "08-correspondence"){
        response.redirect("defendant/b/0000-raise-query")
    } else if (contact == "09-followup"){
        response.redirect("defendant/b/009-follow-up")
    } else if (contact == "10-something-else"){
        response.redirect("defendant/b/0000-raise-query")
    } else {
        response.redirect("/")
    }
})

// for c

router.post('/contact-the-court--c', function(request, response) {

    var contact = request.session.data['whatDoYouWant']
    if (contact == "01-request"){
        response.redirect("defendant/c/001-01-gen-app-start")
    } else if (contact == "02-get-update"){
        response.redirect("defendant/c/002-00-get-update")
    } else if (contact == "03-send-update"){
        response.redirect("defendant/c/003-00-send-update")
    } else if (contact == "04-documents"){
        response.redirect("defendant/c/004-00-send-documents")
    } else if (contact == "05-problems"){
        response.redirect("defendant/c/005-00-solve-problem")
    } else if (contact == "06-hearing-details"){
        response.redirect("defendant/c/006-00-update-hearing")
    } else if (contact == "07-fee"){
        response.redirect("defendant/c/007-00-pay-fee")
    } else if (contact == "08-correspondence"){
        response.redirect("defendant/c/0000-raise-query")
    } else if (contact == "09-followup"){
        response.redirect("defendant/c/009-follow-up")
    } else if (contact == "10-something-else"){
        response.redirect("defendant/c/0000-raise-query")
    } else {
        response.redirect("/")
    }
})


// for d

router.post('/contact-the-court--d', function(request, response) {

    var contact = request.session.data['whatDoYouWant']
    if (contact == "01-request"){
        response.redirect("defendant/d/001-01-gen-app-start")
    } else if (contact == "02-get-update"){
        response.redirect("defendant/d/002-00-get-update")
    } else if (contact == "03-send-update"){
        response.redirect("defendant/d/003-00-send-update")
    } else if (contact == "04-documents"){
        response.redirect("defendant/d/004-00-send-documents")
    } else if (contact == "05-problems"){
        response.redirect("defendant/d/005-00-solve-problem")
    } else if (contact == "06-hearing-details"){
        response.redirect("defendant/d/006-00-update-hearing")
    } else if (contact == "07-fee"){
        response.redirect("defendant/d/007-00-pay-fee")
    } else if (contact == "08-correspondence"){
        response.redirect("defendant/d/0000-raise-query")
    } else if (contact == "09-followup"){
        response.redirect("defendant/d/009-follow-up")
    } else if (contact == "10-something-else"){
        response.redirect("defendant/d/0000-raise-query")
    } else {
        response.redirect("/")
    }
})


// MAKE AN APPLICATION - SELECT AN APPLICATION 

// for a

router.post('/make-gen-app--a', function(request, response) {

    var contact = request.session.data['selectApp']
    if (contact == "application-4"){
        response.redirect("defendant/a/001-02-change-start")
    } else if (contact == "application-5"){
        response.redirect("")
    } else {
        response.redirect("")
    }
})


// for b

router.post('/make-gen-app--b', function(request, response) {

    var contact = request.session.data['selectApp']
    if (contact == "application-4"){
        response.redirect("defendant/b/001-01-gen-app-start")
    } else if (contact == "application-5"){
        response.redirect("defendant/b/001-02-change-start")
    } else {
        response.redirect("defendant/b/001-01-gen-app-start")
    }
})

// for c

router.post('/make-gen-app--c', function(request, response) {

    var contact = request.session.data['selectApp']
    if (contact == "application-4"){
        response.redirect("defendant/c/001-01-gen-app-start")
    } else if (contact == "application-5"){
        response.redirect("defendant/c/001-02-change-start")
    } else {
        response.redirect("defendant/c/001-01-gen-app-start")
    }
})

// for d

router.post('/make-gen-app--d', function(request, response) {

    var contact = request.session.data['selectApp']
    if (contact == "application-4"){
        response.redirect("defendant/d/001-01-gen-app-start")
    } else if (contact == "application-5"){
        response.redirect("defendant/d/001-02-change-start")
    } else {
        response.redirect("defendant/d/001-01-gen-app-start")
    }
})


// HAVE OTHER PARTIES AGREED TO THIS APPLICATION?


// for a

router.post('/parties-agreed--a', function(request, response) {

    var contact = request.session.data['partiesAgreed']
    if (contact == "Yes"){
        response.redirect("defendant/a/001-03-fee-info")
    } else {
        response.redirect("defendant/a/001-02-extra")
    }
})

// route for inform other party 

router.post('/parties-agreed--b', function(request, response) {

    var contact = request.session.data['partiesAgreed']
    if (contact == "Yes"){
        response.redirect("defendant/b/001-03-fee-info")
    } else {
        response.redirect("defendant/b/001-02-extra")
    }
})

// for c

router.post('/parties-agreed--c', function(request, response) {

    var contact = request.session.data['partiesAgreed']
    if (contact == "Yes"){
        response.redirect("defendant/c/001-03-fee-info")
    } else {
        response.redirect("defendant/c/001-02-extra")
    }
})


// for d

router.post('/parties-agreed--d', function(request, response) {

    var contact = request.session.data['partiesAgreed']
    if (contact == "Yes"){
        response.redirect("defendant/d/001-03-fee-info")
    } else {
        response.redirect("defendant/d/001-02-extra")
    }
})





// GET AN UPDATE ON MY CASE - WHAT DO YOU WANT TO DO?

// for a

router.post('/get-update-from-court--a', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWant']
    if (contact == "01-get-update-after"){
        response.redirect("defendant/a/002-01-get-update-after")
    } else if (contact == "02-get-general-update"){
        response.redirect("defendant/a/002-02-get-general-update")
    } else if (contact == "03-understand-claim-not-paid"){
        response.redirect("defendant/a/002-03-understand-claim-not-paid")
    } else if (contact == "04-understand-judgment-not-paid"){
        response.redirect("defendant/a/002-04-understand-judgment-not-paid")
    }
})

// for b


router.post('/get-update-from-court--b', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWant']
    if (contact == "01-get-update-after"){
        response.redirect("defendant/b/002-01-get-update-after")
    } else if (contact == "02-get-general-update"){
        response.redirect("defendant/b/002-02-get-general-update")
    } else if (contact == "03-understand-claim-not-paid"){
        response.redirect("defendant/b/002-03-understand-claim-not-paid")
    } else if (contact == "04-understand-judgment-not-paid"){
        response.redirect("defendant/b/002-04-understand-judgment-not-paid")
    }
})

// for c


router.post('/get-update-from-court--c', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWant']
    if (contact == "01-get-update-after"){
        response.redirect("defendant/c/002-01-get-update-after")
    } else if (contact == "02-get-general-update"){
        response.redirect("defendant/c/002-02-get-general-update")
    } else if (contact == "03-understand-claim-not-paid"){
        response.redirect("defendant/c/002-03-understand-claim-not-paid")
    } else if (contact == "04-understand-judgment-not-paid"){
        response.redirect("defendant/c/002-04-understand-judgment-not-paid")
    }
})



// for d


router.post('/get-update-from-court--d', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWant']
    if (contact == "01-get-update-after"){
        response.redirect("defendant/d/002-01-get-update-after")
    } else if (contact == "02-get-general-update"){
        response.redirect("defendant/d/002-02-get-general-update")
    } else if (contact == "03-understand-claim-not-paid"){
        response.redirect("defendant/d/002-03-understand-claim-not-paid")
    } else if (contact == "04-understand-judgment-not-paid"){
        response.redirect("defendant/d/002-04-understand-judgment-not-paid")
    }
})

// SEND AN UPDATE ON MY CASE - WHAT DO YOU WANT TO DO?

// for a

router.post('/send-update-to-court--a', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWantToSend']
    if (contact == "01-about-paid"){
        response.redirect("defendant/a/003-01-update")
    } else if (contact == "02-settle"){
        response.redirect("defendant/a/003-02-settle")
    } else if (contact == "03-amend"){
        response.redirect("defendant/a/003-03-amend")
    } else if (contact == "04-ended"){
        response.redirect("defendant/a/003-04-claim-ended")
    }   else if (contact == "05-something-else"){
        response.redirect("defendant/a/0000-raise-query")
    }   
    
})

// for b
router.post('/send-update-to-court--b', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWantToSend']
    if (contact == "01-about-paid"){
        response.redirect("defendant/b/003-01-update")
    } else if (contact == "02-settle"){
        response.redirect("defendant/b/003-02-settle")
    } else if (contact == "03-amend"){
        response.redirect("defendant/b/003-03-amend")
    } else if (contact == "04-ended"){
        response.redirect("defendant/b/003-04-claim-ended")
    }   else if (contact == "05-something-else"){
        response.redirect("defendant/b/0000-raise-query")
    }   
    
})

// for c
router.post('/send-update-to-court--c', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWantToSend']
    if (contact == "01-about-paid"){
        response.redirect("defendant/c/003-01-update")
    } else if (contact == "02-settle"){
        response.redirect("defendant/c/003-02-settle")
    } else if (contact == "03-amend"){
        response.redirect("defendant/c/003-03-amend")
    } else if (contact == "04-ended"){
        response.redirect("defendant/c/003-04-claim-ended")
    }   else if (contact == "05-something-else"){
        response.redirect("defendant/c/0000-raise-query")
    }   
    
})


// for d
router.post('/send-update-to-court--d', function(request, response) {

    var contact = request.session.data['whatUpdateDoYouWantToSend']
    if (contact == "01-about-paid"){
        response.redirect("defendant/d/003-01-update")
    } else if (contact == "02-settle"){
        response.redirect("defendant/d/003-02-settle")
    } else if (contact == "03-amend"){
        response.redirect("defendant/d/003-03-amend")
    } else if (contact == "04-ended"){
        response.redirect("defendant/d/003-04-claim-ended")
    }   else if (contact == "05-something-else"){
        response.redirect("defendant/d/0000-raise-query")
    }   
    
})



// SEND DOCUMENTS - WHAT DO YOU WANT TO DO?

// for a

router.post('/send-documents--a', function(request, response) {

    var contact = request.session.data['sendDocs']
    if (contact == "01-enf"){
        response.redirect("defendant/a/004-01-enforcement")
    } else if (contact == "02-claim"){
        response.redirect("defendant/a/004-02-claim")
    } else if (contact == "03-not"){
        response.redirect("defendant/a/004-03-evidence")
    }   
})


// for b
router.post('/send-documents--b', function(request, response) {

    var contact = request.session.data['sendDocs']
    if (contact == "01-enf"){
        response.redirect("defendant/b/004-01-enforcement")
    } else if (contact == "02-claim"){
        response.redirect("defendant/b/004-02-claim")
    } else if (contact == "03-not"){
        response.redirect("defendant/b/004-03-evidence")
    }   
})

// for c
router.post('/send-documents--c', function(request, response) {

    var contact = request.session.data['sendDocs']
    if (contact == "01-enf"){
        response.redirect("defendant/c/004-01-enforcement")
    } else if (contact == "02-claim"){
        response.redirect("defendant/c/004-02-claim")
    } else if (contact == "03-not"){
        response.redirect("defendant/c/004-03-evidence")
    }   
})

// for d
router.post('/send-documents--d', function(request, response) {

    var contact = request.session.data['sendDocs']
    if (contact == "01-enf"){
        response.redirect("defendant/d/004-01-enforcement")
    } else if (contact == "02-claim"){
        response.redirect("defendant/d/004-02-claim")
    } else if (contact == "03-not"){
        response.redirect("defendant/d/004-03-evidence")
    }   
})


// SOLVE A PROBLEM I AM HAVING - WHAT ARE YOU TRYING TO DO?

// for a 

router.post('/solve-problems--a', function(request, response) {

    var contact = request.session.data['solveProblems']
    if (contact == "01-submit"){
        response.redirect("defendant/a/005-01-submit-response")
    } else if (contact == "02-see"){
        response.redirect("defendant/a/005-02-see-claim")
    } else if (contact == "03-view"){
        response.redirect("defendant/a/005-03-view-docs")
    } else if (contact == "05-something-else"){
        response.redirect("defendant/a/0000-raise-query")
    }   
})

// for b

router.post('/solve-problems--b', function(request, response) {

    var contact = request.session.data['solveProblems']
    if (contact == "01-submit"){
        response.redirect("defendant/b/005-01-submit-response")
    } else if (contact == "02-see"){
        response.redirect("defendant/b/005-02-see-claim")
    } else if (contact == "03-view"){
        response.redirect("defendant/b/005-03-view-docs")
    } else if (contact == "05-something-else"){
        response.redirect("defendant/b/0000-raise-query")
    }   
})


// for c

router.post('/solve-problems--c', function(request, response) {

    var contact = request.session.data['solveProblems']
    if (contact == "01-submit"){
        response.redirect("defendant/c/005-01-submit-response")
    } else if (contact == "02-see"){
        response.redirect("defendant/c/005-02-see-claim")
    } else if (contact == "03-view"){
        response.redirect("defendant/c/005-03-view-docs")
    } else if (contact == "05-something-else"){
        response.redirect("defendant/c/0000-raise-query")
    }   
})


// for d

router.post('/solve-problems--d', function(request, response) {

    var contact = request.session.data['solveProblems']
    if (contact == "01-submit"){
        response.redirect("defendant/d/005-01-submit-response")
    } else if (contact == "02-see"){
        response.redirect("defendant/d/005-02-see-claim")
    } else if (contact == "03-view"){
        response.redirect("defendant/d/005-03-view-docs")
    } else if (contact == "05-something-else"){
        response.redirect("defendant/d/0000-raise-query")
    }   
})

// MANAGE HEARING DETAILS - WHAT DO YOU NEED TO DO?

// for a 
router.post('/update-hearing--a', function(request, response) {

    var contact = request.session.data['updateSend']
    if (contact == "01-change-date"){
        response.redirect("defendant/a/006-01-change-date")
    } else if (contact == "02-change-details"){
        response.redirect("defendant/a/006-02-change-details")
    } else if (contact == "03-ask-help"){
        response.redirect("defendant/a/006-03-ask-help")
    } else if (contact == "04-something-else"){
        response.redirect("defendant/a/0000-raise-query")
    }   
})

// for b
router.post('/update-hearing--b', function(request, response) {

    var contact = request.session.data['updateSend']
    if (contact == "01-change-date"){
        response.redirect("defendant/b/006-01-change-date")
    } else if (contact == "02-change-details"){
        response.redirect("defendant/b/006-02-change-details")
    } else if (contact == "03-ask-help"){
        response.redirect("defendant/b/006-03-ask-help")
    } else if (contact == "04-something-else"){
        response.redirect("defendant/b/0000-raise-query")
    }   
})


// for c
router.post('/update-hearing--c', function(request, response) {

    var contact = request.session.data['updateSend']
    if (contact == "01-change-date"){
        response.redirect("defendant/c/006-01-change-date")
    } else if (contact == "02-change-details"){
        response.redirect("defendant/c/006-02-change-details")
    } else if (contact == "03-ask-help"){
        response.redirect("defendant/c/006-03-ask-help")
    } else if (contact == "04-something-else"){
        response.redirect("defendant/c/0000-raise-query")
    }   
})


// for d
router.post('/update-hearing--d', function(request, response) {

    var contact = request.session.data['updateSend']
    if (contact == "01-change-date"){
        response.redirect("defendant/d/006-01-change-date")
    } else if (contact == "02-change-details"){
        response.redirect("defendant/d/006-02-change-details")
    } else if (contact == "03-ask-help"){
        response.redirect("defendant/d/006-03-ask-help")
    } else if (contact == "04-something-else"){
        response.redirect("defendant/d/0000-raise-query")
    }   
})





















