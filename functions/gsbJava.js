const clickGSBJAVA = document.getElementById('linkGSBJAVA')

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'linkGSBJAVA') {
        while (document.body.lastElementChild) {
            document.body.removeChild(document.body.lastElementChild);
        }

        var textExplicationImg = 'Page du menu d\'accueil'
        var txtExplicationProjet = 'Ce projet recensait tous les médecins de la base de données et permettait de rechercher ' +
            'les médecins par spécialité, par nom ou par département.'

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



        /////////////////////////////////////// AFFICHAGE LIEN ///////////////////////////////////////



        var divGlobale = document.createElement('div')
        divGlobale.id = 'divGlobale'
        divGlobale.className = 'page'

        var divProjects = document.createElement('div')
        divProjects.className = 'titleProjects'
        var txtProjects = document.createTextNode('GSB JAVA')

        var divExpImg = document.createElement("div")
        divExpImg.className = "expImg"

        var pTxtExpImg = document.createElement('p')
        pTxtExpImg.className = 'textExpImg'
        var txtExpImg = document.createTextNode(`${textExplicationImg}`)

        var divMarginBot = document.createElement("div")
        divMarginBot.className = "expImg"

        var pTxtMarginBot = document.createElement('p')
        pTxtMarginBot.className = 'textMarginBot'
        var txtMarginBot = document.createTextNode('-')

        var pGoalProject = document.createElement('h2')
        var txtPGoal = document.createTextNode('But du Projet')

        var pGoal = document.createElement('p')
        pGoal.className = 'textProject'
        var pTxtGoal = document.createTextNode(`${txtExplicationProjet}`)

        var divImg = document.createElement('div')
        divImg.className = 'globalProject'

        var divArrowImg1 = document.createElement('div')
        divArrowImg1.className = 'divArrowImg1'

        var divArrowPrevious = document.createElement('img')
        divArrowPrevious.id = 'previousArrow'
        divArrowPrevious.className = 'arrowImg'
        divArrowPrevious.src = './images/ARROWS/Previous_Arrow.png'

        var divImgProject = document.createElement('div')
        divImgProject.className = 'divImgProject'

        var img1 = document.createElement('img')
        img1.id = 'gsbjava0'
        img1.className = 'imgCurrent'
        img1.src = './images/GSB_JAVA/GSB_Java_Menu.png'

        var aImg1 = document.createElement('a')
        aImg1.href = './images/GSB_JAVA/GSB_Java_Menu.png'

        var img2 = document.createElement('img')
        img2.id = 'gsbjava1'
        img2.className = 'imgProject'
        img2.src = './images/GSB_JAVA/GSB_Java_Departement.png'

        var aImg2 = document.createElement('a')
        aImg2.href = './images/GSB_JAVA/GSB_Java_Departement.png'

        var img3 = document.createElement('img')
        img3.id = 'gsbjava2'
        img3.className = 'imgProject'
        img3.src = './images/GSB_JAVA/GSB_Java_Nom.png'

        var aImg3 = document.createElement('a')
        aImg3.href = './images/GSB_JAVA/GSB_Java_Nom.png'

        var img4 = document.createElement('img')
        img4.id = 'gsbjava3'
        img4.className = 'imgProject'
        img4.src = './images/GSB_JAVA/GSB_Java_Specialite.png'

        var aImg4 = document.createElement('a')
        aImg4.href = './images/GSB_JAVA/GSB_Java_Specialite.png'

        var divArrowImg2 = document.createElement('div')
        divArrowImg2.className = 'divArrowImg2'

        var divArrowNext = document.createElement('img')
        divArrowNext.id = 'nextArrow'
        divArrowNext.className = 'arrowImg'
        divArrowNext.src = './images/ARROWS/Next_Arrow.png'


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


        /////////////////////////////////////// CREATION AFFICHAGE LIEN ///////////////////////////////////////


        divProjects.appendChild(txtProjects)
        divGlobale.appendChild(divProjects)
        pGoalProject.appendChild(txtPGoal)
        divGlobale.appendChild(pGoalProject)
        pGoal.appendChild(pTxtGoal)
        divGlobale.appendChild(pGoal)
        divGlobale.appendChild(divImg)
        divArrowImg1.appendChild(divArrowPrevious)
        divImg.appendChild(divArrowImg1)
        divImg.appendChild(divImgProject)
        divImgProject.appendChild(aImg1)
        aImg1.appendChild(img1)
        divImgProject.appendChild(aImg2)
        aImg2.appendChild(img2)
        divImgProject.appendChild(aImg3)
        aImg3.appendChild(img3)
        divImgProject.appendChild(aImg4)
        aImg4.appendChild(img4)
        divArrowImg2.appendChild(divArrowNext)
        divImg.appendChild(divArrowImg2)
        divGlobale.appendChild(divExpImg)
        divExpImg.appendChild(pTxtExpImg)
        pTxtExpImg.appendChild(txtExpImg)
        divGlobale.appendChild(divMarginBot)
        divMarginBot.appendChild(pTxtMarginBot)
        pTxtMarginBot.appendChild(txtMarginBot)
        var currentDiv = document.getElementById('body')
        document.body.insertBefore(divMenu, currentDiv)
        document.body.insertBefore(divGlobale, currentDiv)

        const nextArrow = document.getElementById('nextArrow')
        const previousArrow = document.getElementById('previousArrow')
        const images = document.querySelectorAll('.imgCurrent, .imgProject')
        var i = 0


        /////////////////////////////////////// FONCTION AFFICHER IMAGE NOUVELLE FENETRE ///////////////////////////////////////


        aImg1.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg1, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg2.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg2, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg3.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg3, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg4.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg4, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })


        /////////////////////////////////////// FONCTION FLECHE SUIVANTE IMAGE ///////////////////////////////////////


        nextArrow.addEventListener("click", () => {

            switch (i + 1) {
                case 1:
                    textExplicationImg = 'Liste des médecins triée par département'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 2:
                    textExplicationImg = 'Liste des médecins triée par nom'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 3:
                    textExplicationImg = 'Liste des médecins triée par spécialité'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 4:
                    textExplicationImg = 'Page du menu d\'accueil'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                default:
                    textExplicationImg = 'test'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
            }

            // Affichage image suivante

            if (i < images.length - 1) {
                const gsbjava = document.getElementById("gsbjava" + i);
                gsbjava.className = "imgCurrent"
                i++
                gsbjava.className = 'imgProject'
                const gsbjava1 = document.getElementById("gsbjava" + i);
                gsbjava1.className = "imgCurrent"
            } else {
                const gsbjava1 = document.getElementById("gsbjava" + i);
                gsbjava1.className = "imgProject"
                i = 0
                const gsbjava = document.getElementById("gsbjava" + i)
                gsbjava.className = "imgCurrent"
            }

        })


        /////////////////////////////////////// FONCTION FLECHE PRECEDENTE IMAGE ///////////////////////////////////////


        previousArrow.addEventListener("click", () => {

            switch (i - 1) {
                case 0:
                    textExplicationImg = 'Page du menu'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 1:
                    textExplicationImg = 'Liste des médecins triée par département'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 2:
                    textExplicationImg = 'Liste des médecins triée par nom'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case -1:
                    textExplicationImg = 'Liste de médecins triée par spécialité'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                default:
                    textExplicationImg = 'test'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
            }

            // Affichage image précedente

            if (i <= images.length - 1 && i > 0) {
                const gsbjava = document.getElementById("gsbjava" + i);
                gsbjava.className = "imgCurrent"
                i--
                gsbjava.className = 'imgProject'
                const gsbjava1 = document.getElementById("gsbjava" + i);
                gsbjava1.className = "imgCurrent"
            } else if (i == 0) {
                const gsbjava1 = document.getElementById("gsbjava" + i);
                gsbjava1.className = "imgProject"
                i = 3
                const gsbjava = document.getElementById("gsbjava" + i)
                gsbjava.className = "imgCurrent"
            }

        })
    }
});


