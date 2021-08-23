const clickRapportStage2 = document.getElementById('linkSecondStage')

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'linkSecondStage') {
        while (document.body.lastElementChild) {
            document.body.removeChild(document.body.lastElementChild);
        }

        // crée un nouvel élément div

        /////////////////////////////////////// AFFICHAGE MENU ///////////////////////////////////////



        var divMenu = document.createElement('div')
        divMenu.id = 'menu'
        divMenu.className = 'menu'
        var txtDivMenu = document.createTextNode('Portfolio Maxime Sausset')

        var navBar = document.createElement('nav')
        navBar.id = 'navMenu'

        var globalUl = document.createElement('ul')

        var liAccueil = document.createElement('li')

        var aAccueil = document.createElement('a')
        aAccueil.href = 'index.html'
        var txtAccueil = document.createTextNode('ACCUEIL')

        var liStages = document.createElement('li')
        liStages.className = 'roll'

        var aStages = document.createElement('a')
        var txtStages = document.createTextNode('STAGES')

        var ulStages = document.createElement('ul')
        ulStages.className = 'underRoll'

        var liFirstStage = document.createElement('li')

        var aFirstStage = document.createElement('a')
        aFirstStage.id = "linkFirstStage"
        aFirstStage.href = '#rapport-stage-premiere-annee'
        var txtFirstStage = document.createTextNode('STAGE PREMIÈRE ANNÉE BTS')

        var liSecondStage = document.createElement('li')

        var aSecondStage = document.createElement('a')
        aSecondStage.id = "linkSecondStage"
        aSecondStage.href = '#rapport-stage-seconde-annee'
        var txtSecondStage = document.createTextNode('STAGE SECONDE ANNÉE BTS')

        var liProjets = document.createElement('li')
        liProjets.className = 'roll'

        var aProjets = document.createElement('a')
        var txtProjets = document.createTextNode('PROJETS')

        var ulProjets = document.createElement('ul')
        ulProjets.className = 'underRoll'

        var liGSBPHP = document.createElement('li')

        var aGSBPHP = document.createElement('a')
        aGSBPHP.id = 'linkGSBPHP'
        aGSBPHP.href = '#gsb-php'
        var txtGSBPHP = document.createTextNode('GSB PHP')

        var liGSBZEND = document.createElement('li')

        var aGSBZEND = document.createElement('a')
        aGSBZEND.id = 'linkGSBZEND'
        aGSBZEND.href = '#gsb-zend'
        var txtGSBZEND = document.createTextNode('GSB ZEND')

        var liGSBJAVA = document.createElement('li')

        var aGSBJAVA = document.createElement('a')
        aGSBJAVA.id = 'linkGSBJAVA'
        aGSBJAVA.href = '#gsb-java'
        var txtGSBJAVA = document.createTextNode('GSB JAVA')

        var liJAVAANDROID = document.createElement('li')

        var aJAVAANDROID = document.createElement('a')
        aJAVAANDROID.id = 'linkJAVAANDROID'
        aJAVAANDROID.href = '#java-android'
        var txtJAVAANDROID = document.createTextNode('JAVA ANDROID')

        var liPFC = document.createElement('li')

        var aPFC = document.createElement('a')
        aPFC.id = 'linkPFC'
        aPFC.href = '#pierre-feuille-ciseaux'
        var txtPFC = document.createTextNode('PIERRE FEUILLE CISEAUX')

        var liTESTPURETE = document.createElement('li')

        var aTESTPURETE = document.createElement('a')
        aTESTPURETE.id = 'linkTESTPURETE'
        aTESTPURETE.href = '#test-purete'
        var txtTESTPURETE = document.createTextNode('TEST DE PURETÉ')

        var liQUIZLOL = document.createElement('li')

        var aQUIZLOL = document.createElement('a')
        aQUIZLOL.id = 'linkQUIZLOL'
        aQUIZLOL.href = '#quiz-lol'
        var txtQUIZLOL = document.createTextNode('QUIZ')

        var liMORPION = document.createElement('li')

        var aMORPION = document.createElement('a')
        aMORPION.id = 'linkMORPION'
        aMORPION.href = '#morpion'
        var txtMORPION = document.createTextNode('MORPION')

        var liRsxSociaux = document.createElement('li')
        liRsxSociaux.className = 'roll'

        var aRsxSociaux = document.createElement('a')
        var txtRsxSociaux = document.createTextNode('RÉSEAUX SOCIAUX')

        var ulRsxSociaux = document.createElement('ul')
        ulRsxSociaux.className = 'underRoll'

        var liLinkedin = document.createElement('li')

        var aLinkedin = document.createElement('a')
        aLinkedin.href = 'https://www.linkedin.com/in/maxime-sausset-472597182/'
        aLinkedin.target = '_blank'
        var txtALinkedin = document.createTextNode('LinkedIn')

        var liGitHub = document.createElement('li')

        var aGitHub = document.createElement('a')
        aGitHub.href = 'https://github.com/msausset'
        aGitHub.target = '_blank'
        var txtAGitHub = document.createTextNode('GitHub')


        /////////////////////////////////////// CREATION MENU ///////////////////////////////////////


        divMenu.appendChild(txtDivMenu)
        divMenu.appendChild(navBar)
        navBar.appendChild(globalUl)
        globalUl.appendChild(liAccueil)
        aAccueil.appendChild(txtAccueil)
        liAccueil.appendChild(aAccueil)
        globalUl.appendChild(liStages)
        aStages.appendChild(txtStages)
        liStages.appendChild(aStages)
        liStages.appendChild(ulStages)
        ulStages.appendChild(liFirstStage)
        liFirstStage.appendChild(aFirstStage)
        aFirstStage.appendChild(txtFirstStage)
        liSecondStage.appendChild(aSecondStage)
        aSecondStage.appendChild(txtSecondStage)
        ulStages.appendChild(liSecondStage)
        globalUl.appendChild(liProjets)
        aProjets.appendChild(txtProjets)
        liProjets.appendChild(aProjets)
        liProjets.appendChild(ulProjets)
        ulProjets.appendChild(liGSBPHP)
        liGSBPHP.appendChild(aGSBPHP)
        aGSBPHP.appendChild(txtGSBPHP)
        ulProjets.appendChild(liGSBZEND)
        liGSBZEND.appendChild(aGSBZEND)
        aGSBZEND.appendChild(txtGSBZEND)
        ulProjets.appendChild(liGSBJAVA)
        liGSBJAVA.appendChild(aGSBJAVA)
        aGSBJAVA.appendChild(txtGSBJAVA)
        ulProjets.appendChild(liJAVAANDROID)
        liJAVAANDROID.appendChild(aJAVAANDROID)
        aJAVAANDROID.appendChild(txtJAVAANDROID)
        ulProjets.appendChild(liPFC)
        liPFC.appendChild(aPFC)
        aPFC.appendChild(txtPFC)
        ulProjets.appendChild(liTESTPURETE)
        liTESTPURETE.appendChild(aTESTPURETE)
        aTESTPURETE.appendChild(txtTESTPURETE)
        ulProjets.appendChild(liQUIZLOL)
        liQUIZLOL.appendChild(aQUIZLOL)
        aQUIZLOL.appendChild(txtQUIZLOL)
        ulProjets.appendChild(liMORPION)
        liMORPION.appendChild(aMORPION)
        aMORPION.appendChild(txtMORPION)
        globalUl.appendChild(liRsxSociaux)
        liRsxSociaux.appendChild(aRsxSociaux)
        aRsxSociaux.appendChild(txtRsxSociaux)
        liRsxSociaux.appendChild(ulRsxSociaux)
        ulRsxSociaux.appendChild(liLinkedin)
        liLinkedin.appendChild(aLinkedin)
        aLinkedin.appendChild(txtALinkedin)
        ulRsxSociaux.appendChild(liGitHub)
        liGitHub.appendChild(aGitHub)
        aGitHub.appendChild(txtAGitHub)

        var currentDiv = document.getElementById('body')
        document.body.insertBefore(divMenu, currentDiv)

        /////////////////////////////////////// AFFICHAGE PDF VIEWER ///////////////////////////////////////

        var divContainer = document.createElement('div')
        divContainer.className = 'divContainerFrame'

        var iFrameStage2 = document.createElement('iframe')
        iFrameStage2.src = './images/RAPPORT_STAGE/BTS_SIO_Rapport_de_stage_2eme_année.pdf'

        divContainer.appendChild(iFrameStage2)

        document.body.insertBefore(divContainer, currentDiv)


    }
});


