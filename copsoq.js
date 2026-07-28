const questionsFR = [
    { text: "Prenez-vous du retard dans votre travail ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Contraintes quantitatives", echelle: "Charge de travail" },
    { text: "Disposez-vous d'un temps suffisant pour accomplir vos tâches professionnelles ?", options: ["Presque jamais/Jamais", "Rarement", "Parfois", "Souvent", "Toujours"], domaine: "Contraintes quantitatives", echelle: "Charge de travail" },
    { text: "Travaillez-vous à une cadence élevée tout au long de la journée ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Contraintes quantitatives", echelle: "Rythme de travail" },
    { text: "Est-il nécessaire de maintenir un rythme soutenu au travail ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Contraintes quantitatives", echelle: "Rythme de travail" },
    { text: "Durant votre travail, devez-vous avoir l'œil sur beaucoup de choses ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Contraintes quantitatives", echelle: "Exigences cognitives" },
    { text: "Votre travail exige-t-il que vous vous souveniez de beaucoup de choses ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Contraintes quantitatives", echelle: "Exigences cognitives" },
    { text: "Au travail, êtes-vous informé(e) suffisamment à l'avance au sujet par exemple de décisions importantes, de changements ou de projets futurs ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Prévisibilité" },
    { text: "Recevez-vous toutes les informations dont vous avez besoin pour bien faire votre travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Prévisibilité" },
    { text: "Votre travail est-il reconnu et apprécié par le management ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Reconnaissance" },
    { text: "Êtes-vous traité(e) équitablement au travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Reconnaissance" },
    { text: "Les conflits sont-ils résolus de manière équitable ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Équité" },
    { text: "Le travail est-il réparti équitablement ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Équité" },
    { text: "Votre travail a-t-il des objectifs clairs ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Clarté des rôles" },
    { text: "Savez-vous exactement ce que l'on attend de vous au travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Clarté des rôles" },
    { text: "Au travail, êtes-vous soumis(e) à des demandes contradictoires ?", options: ["Dans une très grande mesure", "Dans une grande mesure", "Plus ou moins", "Dans une faible mesure", "Dans une très faible mesure"], domaine: "Organisation et leadership", echelle: "Conflit de rôles" },
    { text: "Devez-vous parfois faire des choses qui auraient dû être faites autrement ?", options: ["Dans une très grande mesure", "Dans une grande mesure", "Plus ou moins", "Dans une faible mesure", "Dans une très faible mesure"], domaine: "Organisation et leadership", echelle: "Conflit de rôles" },
    { text: "Dans quelle mesure diriez-vous que votre supérieur(e) hiérarchique accorde une grande priorité à la satisfaction au travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Qualité de leadership du supérieur hiérarchique" },
    { text: "Dans quelle mesure diriez-vous que votre supérieur(e) hiérarchique est compétent(e) dans la planification du travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Qualité de leadership du supérieur hiérarchique" },
    { text: "À quelle fréquence votre supérieur(e) hiérarchique est-il(elle) disposé(e) à vous écouter au sujet de vos problèmes au travail ?", options: ["Presque jamais/Jamais", "Rarement", "Parfois", "Souvent", "Toujours"], domaine: "Organisation et leadership", echelle: "Soutien social de la part du supérieur hiérarchique" },
    { text: "À quelle fréquence recevez-vous de l'aide et du soutien de votre supérieur(e) hiérarchique ?", options: ["Presque jamais/Jamais", "Rarement", "Parfois", "Souvent", "Toujours"], domaine: "Organisation et leadership", echelle: "Soutien social de la part du supérieur hiérarchique" },
    { text: "Le management fait-il confiance aux salariés quant à leur capacité à bien faire leur travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Confiance entre les salariés et le management" },
    { text: "Pouvez-vous faire confiance aux informations venant du management ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Confiance entre les salariés et le management" },
    { text: "Y a-t-il une bonne coopération entre les collègues au travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Relations horizontales", echelle: "Confiance entre les collègues" },
    { text: "Dans l'ensemble, les salariés se font-ils confiance entre eux ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Relations horizontales", echelle: "Confiance entre les collègues" },
    { text: "À quelle fréquence recevez-vous de l'aide et du soutien de vos collègues ?", options: ["Presque jamais/Jamais", "Rarement", "Parfois", "Souvent", "Toujours"], domaine: "Relations horizontales", echelle: "Soutien social de la part des collègues" },
    { text: "À quelle fréquence vos collègues se montrent-ils à l'écoute de vos problèmes au travail ?", options: ["Presque jamais/Jamais", "Rarement", "Parfois", "Souvent", "Toujours"], domaine: "Relations horizontales", echelle: "Soutien social de la part des collègues" },
    { text: "Avez-vous une grande marge de manœuvre dans votre travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Autonomie", echelle: "Marge de manœuvre" },
    { text: "Pouvez-vous intervenir sur la quantité de travail qui vous est attribuée ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Autonomie", echelle: "Marge de manœuvre" },
    { text: "Votre travail nécessite-t-il que vous preniez des initiatives ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Autonomie", echelle: "Possibilités d'épanouissement" },
    { text: "Votre travail vous donne-il la possibilité d'apprendre des choses nouvelles ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Autonomie", echelle: "Possibilités d'épanouissement" },
    { text: "En général, diriez-vous que votre santé est :", options: ["Mauvaise", "Plutôt mauvaise", "Assez bonne", "Bonne", "Excellente/Très bonne"], domaine: "Santé et Bien-être", echelle: "Santé auto-évaluée" },
    { text: "À quelle fréquence avez-vous été irritable ?", options: ["Tout le temps", "Très souvent", "Parfois", "Très peu souvent", "Jamais"], domaine: "Santé et Bien-être", echelle: "Stress" },
    { text: "À quelle fréquence avez-vous été stressé(e) ?", options: ["Tout le temps", "Très souvent", "Parfois", "Très peu souvent", "Jamais"], domaine: "Santé et Bien-être", echelle: "Stress" },
    { text: "À quelle fréquence vous êtes-vous senti(e) à bout de force ?", options: ["Tout le temps", "Très souvent", "Parfois", "Très peu souvent", "Jamais"], domaine: "Santé et Bien-être", echelle: "Épuisement" },
    { text: "À quelle fréquence avez-vous été émotionnellement épuisé(e) ?", options: ["Tout le temps", "Très souvent", "Parfois", "Très peu souvent", "Jamais"], domaine: "Santé et Bien-être", echelle: "Épuisement" },
    { text: "Votre travail vous place-t-il dans des situations déstabilisantes sur le plan émotionnel ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Santé et Bien-être", echelle: "Exigences émotionnelles" },
    { text: "Votre travail est-il éprouvant sur le plan émotionnel ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Santé et Bien-être", echelle: "Exigences émotionnelles" },
    { text: "Sentez-vous que votre travail vous prend tellement d'énergie que cela a un impact négatif sur votre vie privée ?", options: ["Oui, certainement", "Oui, jusqu'à un certain point", "Oui, mais juste un peu", "Non, pas du tout"], domaine: "Santé et Bien-être", echelle: "Conflit famille/travail" },
    { text: "Sentez-vous que votre travail vous prend tellement de temps que cela a un impact négatif sur votre vie privée ?", options: ["Oui, certainement", "Oui, jusqu'à un certain point", "Oui, mais juste un peu", "Non, pas du tout"], domaine: "Santé et Bien-être", echelle: "Conflit famille/travail" },
    { text: "Êtes-vous inquiet(ète) à l'idée de perdre votre emploi ?", options: ["Dans une très grande mesure", "Dans une grande mesure", "Plus ou moins", "Dans une faible mesure", "Dans une très faible mesure"], domaine: "Santé et Bien-être", echelle: "Insécurité professionnelle" },
    { text: "Craignez-vous d'être muté(e) à un autre poste de travail contre votre volonté ?", options: ["Dans une très grande mesure", "Dans une grande mesure", "Plus ou moins", "Dans une faible mesure", "Dans une très faible mesure"], domaine: "Santé et Bien-être", echelle: "Insécurité professionnelle" },
    { text: "Votre travail a-t-il du sens pour vous ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Vécu professionnel", echelle: "Sens du travail" },
    { text: "Avez-vous le sentiment que le travail que vous faites est important ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Vécu professionnel", echelle: "Sens du travail" },
    { text: "Recommanderiez-vous à un ami proche de postuler sur un emploi dans votre entreprise ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Vécu professionnel", echelle: "Engagement dans l'entreprise" },
    { text: "Pensez-vous que votre entreprise est d'une grande importance pour vous ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Vécu professionnel", echelle: "Engagement dans l'entreprise" },
    { text: "À quel point êtes-vous satisfait(e) de votre travail dans son ensemble, en prenant en considération tous les aspects ?", options: ["Très insatisfait(e)", "Insatisfait(e)", "Satisfait(e)", "Très satisfait(e)"], domaine: "Vécu professionnel", echelle: "Satisfaction au travail" }
];
const questionsEN = [
    { text: "Is your workload unevenly distributed so it piles up?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Quantitative Demands"},
    { text: "How often do you not have time to complete all your work tasks?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Quantitative Demands"},
    { text: "Do you get behind with your work?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Quantitative Demands"},
    { text: "Do you have enough time for your work tasks?", options: ["Always","Often","Sometimes","Seldom","Never/hardly ever"], domaine:"Demands at work", echelle:"Quantitative Demands"},
    { text: "Do you have to work very fast?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Work Pace"},
    { text: "Do you work at a high pace throughout the day?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Demands at work", echelle:"Work Pace"},
    { text: "Is it necessary to keep working at a high pace?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Demands at work", echelle:"Work Pace"},
    { text: "Do you have to keep your eyes on lots of things while you work?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Cognitive Demands"},
    { text: "Does your work require that you remember a lot of things?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Cognitive Demands"},
    { text: "Does your work demand that you are good at coming up with new ideas?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Cognitive Demands"},
    { text: "Does your work require you to make difficult decisions?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Cognitive Demands"},
    { text: "Does your work put you in emotionally disturbing situations?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Emotional Demands"},
    { text: "Do you have to deal with other people's personal problems as part of your work?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Emotional Demands"},
    { text: "Is your work emotionally demanding?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Demands at work", echelle:"Emotional Demands"},
    { text: "Are you required to treat everyone equally, even if you do not feel like it?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Demands for Hiding Emotions"},
    { text: "Does your work require that you hide your feelings?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Demands at work", echelle:"Demands for Hiding Emotions"},
    { text: "Are you required to be kind and open towards everyone – regardless of how they behave towards you?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Demands at work", echelle:"Demands for Hiding Emotions"},
    { text: "Does your work require that you do not state your opinion?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Demands at work", echelle:"Demands for Hiding Emotions"},
    { text: "Do you have a large degree of influence on the decisions concerning your work?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Influence at Work"},
    { text: "Do you have a say in choosing who you work with?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Influence at Work"},
    { text: "Can you influence the amount of work assigned to you?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Influence at Work"},
    { text: "Do you have any influence on what you do at work?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Influence at Work"},
    { text: "Can you influence how quickly you work?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Influence at Work"},
    { text: "Do you have any influence on HOW you do your work?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Influence at Work"},
    { text: "Do you have the possibility of learning new things through your work?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work Organization and Job Contents", echelle:"Possibilities for Development (Skill discretion)"},
    { text: "Can you use your skills or expertise in your work?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work Organization and Job Contents", echelle:"Possibilities for Development (Skill discretion)"},
    { text: "Does your work give you the opportunity to develop your skills?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work Organization and Job Contents", echelle:"Possibilities for Development (Skill discretion)"},
    { text: "Is your work varied?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Variation of Work"},
    { text: "Do you have to do the same thing over and over again?", options: ["Always","Often","Sometimes","Seldom","Never/hardly ever"], domaine:"Work Organization and Job Contents", echelle:"Variation of Work"},
    { text: "Can you decide when to take a break?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Control over Working Time"},
    { text: "Can you take holidays more or less when you wish?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Control over Working Time"},
    { text: "Can you leave your work to have a chat with a colleague?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Control over Working Time"},
    { text: "If you have some private business is it possible for you to leave your place of work for half an hour without special permission?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work Organization and Job Contents", echelle:"Control over Working Time"},
    { text: "Do you have to do overtime?", options: ["Always","Often","Sometimes","Seldom","Never/hardly ever"], domaine:"Work Organization and Job Contents", echelle:"Control over Working Time"},
    { text: "Is your work meaningful?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work Organization and Job Contents", echelle:"Meaning of Work"},
    { text: "Do you feel that the work you do is important?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work Organization and Job Contents", echelle:"Meaning of Work"},
    { text: "At your place of work. are you informed well in advance concerning, for example important decisions. changes or plans for the future?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Predictability"},
    { text: "Do you receive all the information you need to do your work well?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Predictability"},
    { text: "Does your work have clear objectives?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Role Clarity"},
    { text: "Do you know exactly which areas are your responsibility?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Role Clarity"},
    { text: "Do you know exactly what is expected of you at work?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Role Clarity"},
    { text: "Are contradictory demands placed on you at work?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Role Conflicts"},
    { text: "Do you sometimes have to do things which ought to have been done in a different way?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Role Conflicts"},
    { text: "Do you sometimes have to do things which seem to be unnecessary?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Illegitimate Tasks"},
    { text: "To what extent would you say that your immediate superior makes sure that the members of staff have good development opportunities?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Quality of Leadership"},
    { text: "To what extent would you say that your immediate superior gives high priority to job satisfaction?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Quality of Leadership"},
    { text: "To what extent would you say that your immediate superior is good at work planning?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Quality of Leadership"},
    { text: "To what extent would you say that your immediate superior is good at solving conflicts?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Interpersonal Relations and Leadership", echelle:"Quality of Leadership"},
    { text: "How often is your immediate superior willing to listen to your problems at work. if needed?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Interpersonal Relations and Leadership", echelle:"Social Support from Supervisor"},
    { text: "How often do you get help and support from your immediate superior. if needed?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Interpersonal Relations and Leadership", echelle:"Social Support from Supervisor"},
    { text: "How often does your immediate superior talk with you about how well you carry out your work?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Interpersonal Relations and Leadership", echelle:"Social Support from Supervisor"},
    { text: "How often do you get help and support from your colleagues. if needed?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Interpersonal Relations and Leadership", echelle:"Social Support from Colleagues"},
    { text: "How often are your colleagues willing to listen to your problems at work. if needed?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Interpersonal Relations and Leadership", echelle:"Social Support from Colleagues"},
    { text: "How often do your colleagues talk with you about how well you carry out your work?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Interpersonal Relations and Leadership", echelle:"Social Support from Colleagues"},
    { text: "Is there a good atmosphere between you and your colleagues?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Interpersonal Relations and Leadership", echelle:"Sense of Community at Work"},
    { text: "Do you feel part of a community at your place of work?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Interpersonal Relations and Leadership", echelle:"Sense of Community at Work"},
    { text: "Would you recommend other people to apply for a position at your workplace?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Commitment to the Workplace"},
    { text: "How often do you consider looking for work elsewhere?", options: ["Always","Often","Sometimes","Seldom","Never/hardly ever"], domaine:"Work–Individual Interface", echelle:"Commitment to the Workplace"},
    { text: "Do you enjoy telling others about your place of work?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Commitment to the Workplace"},
    { text: "Do you feel that your place of work is of great importance to you?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Commitment to the Workplace"},
    { text: "At my work. I feel bursting with energy", options: ["Never","Seldom","Sometimes","Often","Always"], domaine:"Work–Individual Interface", echelle:"Work Engagement"},
    { text: "I am enthusiastic about my job", options: ["Never","Seldom","Sometimes","Often","Always"], domaine:"Work–Individual Interface", echelle:"Work Engagement"},
    { text: "I am immersed in my work", options: ["Never","Seldom","Sometimes","Often","Always"], domaine:"Work–Individual Interface", echelle:"Work Engagement"},
    { text: "Are you worried about becoming unemployed?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Job Insecurity"},
    { text: "Are you worried about it being difficult for you to find another job if you became unemployed?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Job Insecurity"},
    { text: "Are you worried about new technology making you redundant?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Job Insecurity"},
    { text: "Are you worried about being transferred to another job against your will?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Insecurity over Working Conditions"},
    { text: "Are you worried about the timetable being changed (shift. weekdays. time to enter and leave …) against your will?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Insecurity over Working Conditions"},
    { text: "Are you worried about a decrease in your salary (reduction. variable pay being introduced …)?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Insecurity over Working Conditions"},
    { text: "Are you worried about your working tasks being changed against your will?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Insecurity over Working Conditions"},
    { text: "Are there good prospects in your job?", options: ["To a very large extent","To a large extent","Somewhat","To a small extent","To a very small extent"], domaine:"Work–Individual Interface", echelle:"Insecurity over Working Conditions"},
    { text: "Regarding your work in general. How pleased are you with your work prospects?", options: ["Very unsatisfied","Unsatisfied","Neither/nor","Satisfied","Very satisfied"], domaine:"Work–Individual Interface", echelle:"Job Satisfaction"},
    { text: "Regarding your work in general. How pleased are you with your job as a whole. everything taken into consideration?", options: ["Very unsatisfied","Unsatisfied","Neither/nor","Satisfied","Very satisfied"], domaine:"Work–Individual Interface", echelle:"Job Satisfaction"},
    { text: "Regarding your work in general. How pleased are you with your salary?", options: ["Very unsatisfied","Unsatisfied","Neither/nor","Satisfied","Very satisfied"], domaine:"Work–Individual Interface", echelle:"Job Satisfaction"},
    { text: "Regarding your work in general. How pleased are you with the way your abilities are used?", options: ["Very unsatisfied","Unsatisfied","Neither/nor","Satisfied","Very satisfied"], domaine:"Work–Individual Interface", echelle:"Job Satisfaction"},
    { text: "Regarding your work in general. How pleased are you with the physical working conditions?", options: ["Very unsatisfied","Unsatisfied","Neither/nor","Satisfied","Very satisfied"], domaine:"Work–Individual Interface", echelle:"Job Satisfaction"},
    { text: "Do you feel that your work drains so much of your energy that it has a negative effect on your private life?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Work Life Conflict"},
    { text: "Do you feel that your work takes so much of your time that it has a negative effect on your private life?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Work Life Conflict"},
    { text: "Are there times when you need to be at work and at home at the same time?", options: ["Never/hardly ever","Seldom","Sometimes","Often","Always"], domaine:"Work–Individual Interface", echelle:"Work Life Conflict"},
    { text: "The demands of my work interfere with my private and family life?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Work Life Conflict"},
    { text: "Due to work-related duties, I have to make changes to my plans for private and family activities.", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Work–Individual Interface", echelle:"Work Life Conflict"},
    { text: "Do the employees withhold information from each other?", options: ["To a very large extent","To a large extent","Somewhat","To a small extent","To a very small extent"], domaine:"Social Capital", echelle:"Horizontal Trust"},
    { text: "Do the employees withhold information from the management?", options: ["To a very large extent","To a large extent","Somewhat","To a small extent","To a very small extent"], domaine:"Social Capital", echelle:"Horizontal Trust"},
    { text: "Do the employees in general trust each other?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Social Capital", echelle:"Horizontal Trust"},
    { text: "Does the management trust the employees to do their work well?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Social Capital", echelle:"Vertical Trust"},
    { text: "Can the employees trust the information that comes from the management?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Social Capital", echelle:"Vertical Trust"},
    { text: "Are the employees able to express their views and feelings?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Social Capital", echelle:"Vertical Trust"},
    { text: "Does the management withhold important information from the employees?", options: ["To a very large extent","To a large extent","Somewhat","To a small extent","To a very small extent"], domaine:"Social Capital", echelle:"Vertical Trust"},
    { text: "Are conflicts resolved in a fair way?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Social Capital", echelle:"Organizational Justice"},
    { text: "Is the work distributed fairly?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Social Capital", echelle:"Organizational Justice"},
    { text: "Are employees appreciated when they have done a good job?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Social Capital", echelle:"Organizational Justice"},
    { text: "Are all suggestions from employees treated seriously by the management?", options: ["To a very small extent","To a small extent","Somewhat","To a large extent","To a very large extent"], domaine:"Social Capital", echelle:"Organizational Justice"},
];
const i18n = {
    fr: {
        title: "Questionnaire COPSOQ",
        intro1: "Veuillez répondre à chaque question en sélectionnant la réponse qui correspond le mieux à votre situation.",
        intro2: "Il n'y a pas de bonnes ou de mauvaises réponses. Répondez de manière honnête et spontanée.",
        resultsTitle: "Résultats du Questionnaire COPSOQ",
        resultsDesc: "Voici un aperçu graphique de votre profil ainsi que les réponses détaillées par domaine et échelle :",
        saveBtn: "Sauvegarder",
        resetBtn: "Réinitialiser le questionnaire",
        randomBtn: "Remplissage aléatoire",
        loadSingleBtn: "Charger un fichier",
        loadMultipleBtn: "Charger plusieurs fichiers",
        submitBtn: "Soumettre le questionnaire",
        answerPrefix: "Réponse :",
        alertCompleteBeforeSave: "Veuillez répondre à toutes les questions avant de sauvegarder le formulaire.",
        alertFormIncomplete: "Le formulaire est incomplet.",
        fileNameBase: "questionnaire-copsoq-sauvegarde",
        errInvalidFileData: (fileName) => `Le fichier ${fileName} ne contient pas de données de formulaire valides.`,
        errWrongAnswerCount: (fileName, got, expected) => `Le fichier ${fileName} contient ${got} réponses alors que le questionnaire en attend ${expected}.`,
        errDuplicateAnswers: (fileName) => `Le fichier ${fileName} contient des réponses dupliquées pour une même question.`,
        errMissingAnswers: (fileName) => `Le fichier ${fileName} ne contient pas toutes les réponses attendues pour ce questionnaire.`,
        errInvalidAnswers: (fileName) => `Le fichier ${fileName} contient une ou plusieurs réponses invalides.`,
        errReadFile: (fileName) => `Impossible de lire le fichier ${fileName}.`,
        errMixedLanguages: "Impossible de mélanger des sauvegardes françaises et anglaises lors d'un chargement multiple.",
        alertLoadSingleSuccess: "Sauvegarde chargée avec succès.",
        alertLoadSingleFail: "Impossible de charger la sauvegarde.",
        errNoValidSaves: "Aucune sauvegarde valide n'a pu être chargée.",
        fileFallback: (n) => `Sauvegarde ${n}`,
        alertLoadMultipleSuccess: (n) => `Chargement réussi de ${n} sauvegarde(s).`,
        alertLoadMultipleFail: "Impossible de charger les sauvegardes.",
        aggregatedStatsTitle: "Statistiques agrégées des sauvegardes chargées",
        thScale: "Échelle",
        thMean: "Moyenne",
        thMedian: "Médiane",
        thMin: "Minimum",
        thMax: "Maximum",
        alertCompleteBeforeSubmit: "Veuillez répondre à toutes les questions avant de soumettre."
    },
    en: {
        title: "COPSOQ Questionnaire",
        intro1: "Please answer each question by selecting the response that best fits your situation.",
        intro2: "There are no right or wrong answers. Please answer honestly and spontaneously.",
        resultsTitle: "COPSOQ Questionnaire Results",
        resultsDesc: "Here is a graphical overview of your profile along with detailed answers by domain and scale:",
        saveBtn: "Save",
        resetBtn: "Reset the questionnaire",
        randomBtn: "Random Fill",
        loadSingleBtn: "Load a file",
        loadMultipleBtn: "Load multiple files",
        submitBtn: "Submit the questionnaire",
        answerPrefix: "Answer:",
        alertCompleteBeforeSave: "Please answer all questions before saving the form.",
        alertFormIncomplete: "The form is incomplete.",
        fileNameBase: "copsoq-questionnaire-save",
        errInvalidFileData: (fileName) => `File ${fileName} does not contain valid questionnaire data.`,
        errWrongAnswerCount: (fileName, got, expected) => `File ${fileName} contains ${got} answers while ${expected} are expected.`,
        errDuplicateAnswers: (fileName) => `File ${fileName} contains duplicate answers for the same question.`,
        errMissingAnswers: (fileName) => `File ${fileName} is missing expected answers for this questionnaire.`,
        errInvalidAnswers: (fileName) => `File ${fileName} contains one or more invalid answers.`,
        errReadFile: (fileName) => `Unable to read file ${fileName}.`,
        errMixedLanguages: "Cannot mix French and English save files in a multiple-file load.",
        alertLoadSingleSuccess: "Save loaded successfully.",
        alertLoadSingleFail: "Unable to load the save file.",
        errNoValidSaves: "No valid save file could be loaded.",
        fileFallback: (n) => `Save ${n}`,
        alertLoadMultipleSuccess: (n) => `Successfully loaded ${n} save file(s).`,
        alertLoadMultipleFail: "Unable to load save files.",
        aggregatedStatsTitle: "Aggregated statistics for loaded saves",
        thScale: "Scale",
        thMean: "Mean",
        thMedian: "Median",
        thMin: "Minimum",
        thMax: "Maximum",
        alertCompleteBeforeSubmit: "Please answer all questions before submitting."
    }
};
let currentQuestions = questionsFR;
let currentLang = 'fr';
let displayedQuestions = [];
function tr() {
    return i18n[currentLang] || i18n.fr;
}
function getQuestionSetForLang(lang) {
    return lang === 'en' ? questionsEN : questionsFR;
}
function resolveLang(lang) {
    return lang === 'en' ? 'en' : 'fr';
}
function selectLanguage(lang) {
    currentLang = resolveLang(lang);
    currentQuestions = getQuestionSetForLang(currentLang);
    const t = tr();
    document.getElementById('mainTitle').textContent = t.title;
    document.getElementById('introP1').textContent = t.intro1;
    document.getElementById('introP2').textContent = t.intro2;
    document.getElementById('resultsTitle').textContent = t.resultsTitle;
    document.getElementById('resultsDesc').textContent = t.resultsDesc;
    document.getElementById('saveButton').textContent = t.saveBtn;
    document.getElementById('resetButton').textContent = t.resetBtn;
    document.getElementById('randomButton').textContent = t.randomBtn;
    document.getElementById('loadSingleBtn').textContent = t.loadSingleBtn;
    document.getElementById('loadMultipleBtn').textContent = t.loadMultipleBtn;
    const form = document.getElementById('copsocForm');
    form.innerHTML = '';
    generateForm();
    document.getElementById('languageSelector').style.display = 'none';
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function updateActionButtons() {
    const resultsSection = document.getElementById('resultsSection');
    const resultsVisible = resultsSection && getComputedStyle(resultsSection).display !== 'none';
    const saveButton = document.getElementById('saveButton');
    if (saveButton) saveButton.disabled = !isFormComplete();
    const resetButton = document.getElementById('resetButton');
    if (resetButton) resetButton.disabled = resultsVisible || !document.getElementById('copsocForm').querySelector('input:checked');
    const randButton = document.getElementById('randomButton');
    if (randButton) randButton.disabled = resultsVisible || document.getElementById('copsocForm').querySelector('input:checked');
    const submitButton = document.getElementById('submitButton');
    if (submitButton) submitButton.disabled = !isFormComplete();
}
function isFormComplete() {
    const form = document.getElementById('copsocForm');
    if (!form) return false;
    return form.checkValidity();
}
function generateForm() {
    const form = document.getElementById('copsocForm');
    form.innerHTML = '';
    displayedQuestions = shuffle([...currentQuestions]);
    displayedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        const label = document.createElement('label');
        label.className = 'question-label';
        label.textContent = `${index + 1}. ${q.text}`;
        questionDiv.appendChild(label);
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        q.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q${index}`;
            radio.value = i;
            radio.required = true;
            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            optionDiv.appendChild(radio);
            optionDiv.appendChild(optionLabel);
            optionsDiv.appendChild(optionDiv);
        });
        questionDiv.appendChild(optionsDiv);
        form.appendChild(questionDiv);
    });
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.id = 'submitButton';
    submitButton.textContent = tr().submitBtn;
    submitButton.onclick = submitForm;
    form.appendChild(submitButton);
    form.addEventListener('change', updateActionButtons);
    updateActionButtons();
}
function collectCurrentAnswers() {
    const form = document.getElementById('copsocForm');
    const formData = new FormData(form);
    const answers = [];
    for (let i = 0; i < displayedQuestions.length; i++) {
        const answerIndex = formData.get(`q${i}`);
        if (answerIndex === null) return null;
        const q = displayedQuestions[i];
        const numericIndex = parseInt(answerIndex, 10);
        if (Number.isNaN(numericIndex) || numericIndex < 0 || numericIndex >= q.options.length) return null;
        answers.push({ questionText: q.text, answerIndex: numericIndex });
    }
    return answers;
}
function saveFormToFile() {
    if (!isFormComplete()) {
        alert(tr().alertCompleteBeforeSave);
        return;
    }
    const answers = collectCurrentAnswers();
    if (!answers) {
        alert(tr().alertFormIncomplete);
        return;
    }
    const payload = {
        version: 1,
        savedAt: new Date().toISOString(),
        lang: currentLang,
        answers
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${tr().fileNameBase}${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
function normalizeSavedAnswers(savedAnswers, questionSet) {
    return savedAnswers.map(item => {
        const matchingQuestion = questionSet.find(q => q.text === item.questionText);
        if (!matchingQuestion) return null;
        const answerIndex = parseInt(item.answerIndex, 10);
        if (Number.isNaN(answerIndex) || answerIndex < 0 || answerIndex >= matchingQuestion.options.length) return null;
        return {
            answerIndex,
            domaine: matchingQuestion.domaine,
            echelle: matchingQuestion.echelle,
            options: matchingQuestion.options,
            question: matchingQuestion.text,
            answer: matchingQuestion.options[answerIndex]
        };
    }).filter(Boolean);
}
function validateSavedPayload(parsed, fileName) {
    const t = tr();
    if (!parsed || !Array.isArray(parsed.answers)) {
        throw new Error(t.errInvalidFileData(fileName));
    }
    const payloadLang = resolveLang(parsed.lang || currentLang);
    const questionSet = getQuestionSetForLang(payloadLang);
    const expectedQuestionTexts = questionSet.map(q => q.text);
    const loadedQuestionTexts = parsed.answers.map(item => item.questionText);
    if (parsed.answers.length !== questionSet.length) {
        throw new Error(t.errWrongAnswerCount(fileName, parsed.answers.length, questionSet.length));
    }
    const duplicates = loadedQuestionTexts.filter((text, index) => loadedQuestionTexts.indexOf(text) !== index);
    if (duplicates.length > 0) throw new Error(t.errDuplicateAnswers(fileName));
    const missingQuestions = expectedQuestionTexts.filter(text => !loadedQuestionTexts.includes(text));
    if (missingQuestions.length > 0) throw new Error(t.errMissingAnswers(fileName));
    const invalidEntries = parsed.answers.filter(item => {
        if (typeof item.questionText !== 'string' || !Number.isInteger(item.answerIndex)) return true;
        const matchingQuestion = questionSet.find(q => q.text === item.questionText);
        if (!matchingQuestion) return true;
        return item.answerIndex < 0 || item.answerIndex >= matchingQuestion.options.length;
    });
    if (invalidEntries.length > 0) throw new Error(t.errInvalidAnswers(fileName));
    return {
        lang: payloadLang,
        answers: normalizeSavedAnswers(parsed.answers, questionSet)
    };
}
function readSavedFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function () {
            try {
                const parsed = JSON.parse(reader.result);
                const validated = validateSavedPayload(parsed, file.name);
                resolve({
                    fileName: file.name,
                    lang: validated.lang,
                    answers: validated.answers
                });
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = function () {
            reject(new Error(tr().errReadFile(file.name)));
        };
        reader.readAsText(file);
    });
}
function ensureResultsVisible() {
    document.getElementById('resultsTitle').textContent = tr().resultsTitle;
    document.getElementById('resultsDesc').textContent = tr().resultsDesc;
    document.getElementById('copsocForm').style.display = 'none';
    const submitBtn = document.getElementById('submitButton');
    if (submitBtn) submitBtn.style.display = 'none';
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'block';
    updateActionButtons();
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
async function loadSingleFormFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    try {
        const data = await readSavedFile(file);
        if (data.lang !== currentLang) {
            currentLang = data.lang;
            currentQuestions = getQuestionSetForLang(currentLang);
            selectLanguage(currentLang);
        }
        displayLoadedSingleFileResults(data.answers);
        ensureResultsVisible();
        sunburstChart(data.answers);
        alert(tr().alertLoadSingleSuccess);
    } catch (error) {
        alert(error.message || tr().alertLoadSingleFail);
    } finally {
        event.target.value = '';
    }
}
async function loadMultipleFormFiles(event) {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;
    try {
        const loadedFiles = [];
        for (const file of files) loadedFiles.push(await readSavedFile(file));
        if (loadedFiles.length === 0) throw new Error(tr().errNoValidSaves);
        const langs = new Set(loadedFiles.map(f => resolveLang(f.lang)));
        if (langs.size > 1) {
            throw new Error(tr().errMixedLanguages);
        }
        const batchLang = loadedFiles[0].lang;
        if (batchLang && batchLang !== currentLang) {
            currentLang = resolveLang(batchLang);
            currentQuestions = getQuestionSetForLang(currentLang);
            selectLanguage(currentLang);
        }
        renderLoadedFilesSummary(loadedFiles);
        ensureResultsVisible();
        clearSunburstChart();
        alert(tr().alertLoadMultipleSuccess(loadedFiles.length));
    } catch (error) {
        alert(error.message || tr().alertLoadMultipleFail);
    } finally {
        event.target.value = '';
    }
}
function getScoreForAnswer(item, answerIndex) {
    const totalOptions = item.options.length;
    if (totalOptions <= 1) return 0;
    return Math.round(((answerIndex + 1) / totalOptions) * 100);
}
function getScoreColor(score) {
    if (score <= 20) return '#D55E00';
    if (score <= 50) return '#E69F00';
    if (score < 80) return '#F0E442';
    return '#009E73';
}
function calculateMean(values) { return values.length ? Math.round(values.reduce((s, v) => s + v, 0) / values.length) : 0; }
function calculateMedian(values) {
    if (!values.length) return 0;
    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? Math.round((sorted[middle - 1] + sorted[middle]) / 2) : Math.round(sorted[middle]);
}
function calculateMin(values) { return values.length ? Math.min(...values) : 0; }
function calculateMax(values) { return values.length ? Math.max(...values) : 0; }
function getContrastTextColor(backgroundColor) {
    if (!backgroundColor || typeof backgroundColor !== 'string') return '#ffffff';
    const normalizedColor = backgroundColor.replace('#', '');
    const safeColor = normalizedColor.length === 3
        ? normalizedColor.split('').map(char => char + char).join('')
        : normalizedColor;
    if (safeColor.length !== 6) return '#ffffff';
    const red = parseInt(safeColor.slice(0, 2), 16);
    const green = parseInt(safeColor.slice(2, 4), 16);
    const blue = parseInt(safeColor.slice(4, 6), 16);
    const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
    return luminance > 0.65 ? '#1f2937' : '#ffffff';
}
function getPointTooltipColor(dataset, dataIndex) {
    if (!dataset) return '#333333';
    const availableColors = dataset.pointBackgroundColor || dataset.borderColor || dataset.backgroundColor;
    if (Array.isArray(availableColors)) return availableColors[dataIndex] || availableColors[0] || '#333333';
    return availableColors || '#333333';
}
function buildDomainSummary(answers) {
    const groupedByDomaine = {};
    answers.forEach(answer => {
        if (!groupedByDomaine[answer.domaine]) groupedByDomaine[answer.domaine] = {};
        if (!groupedByDomaine[answer.domaine][answer.echelle]) groupedByDomaine[answer.domaine][answer.echelle] = [];
        groupedByDomaine[answer.domaine][answer.echelle].push(answer);
    });
    const domainScores = {};
    const scaleStatsByDomain = {};
    for (const domaine in groupedByDomaine) {
        const scaleStats = {};
        const scaleScores = Object.keys(groupedByDomaine[domaine]).map(echelle => {
            const items = groupedByDomaine[domaine][echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            const average = Math.round(total / items.length);
            scaleStats[echelle] = average;
            return average;
        });
        domainScores[domaine] = {
            total: scaleScores.reduce((sum, value) => sum + value, 0),
            count: scaleScores.length
        };
        scaleStatsByDomain[domaine] = scaleStats;
    }
    return { groupedByDomaine, domainScores, scaleStatsByDomain };
}
function renderScaleIndicator(titleElement, echelle, score) {
    const bullet = document.createElement('span');
    bullet.className = 'scale-bullet';
    bullet.style.backgroundColor = getScoreColor(score);
    const label = document.createElement('span');
    label.textContent = `${echelle}`;
    titleElement.textContent = '';
    titleElement.appendChild(bullet);
    titleElement.appendChild(label);
}
function displayLoadedSingleFileResults(data) {
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '';
    const groupedByDomaine = {};
    data.forEach(item => {
        if (!groupedByDomaine[item.domaine]) groupedByDomaine[item.domaine] = {};
        if (!groupedByDomaine[item.domaine][item.echelle]) groupedByDomaine[item.domaine][item.echelle] = [];
        groupedByDomaine[item.domaine][item.echelle].push(item);
    });
    const domainScores = {};
    for (const domaine in groupedByDomaine) {
        const domaineDiv = document.createElement('div');
        domaineDiv.className = 'domaine';
        const domaineTitle = document.createElement('div');
        domaineTitle.className = 'domaine-title';
        domaineTitle.textContent = domaine;
        domaineDiv.appendChild(domaineTitle);
        for (const echelle in groupedByDomaine[domaine]) {
            const echelleDiv = document.createElement('div');
            echelleDiv.className = 'echelle';
            const echelleTitle = document.createElement('div');
            echelleTitle.className = 'echelle-title';
            echelleTitle.textContent = echelle;
            echelleDiv.appendChild(echelleTitle);
            const items = groupedByDomaine[domaine][echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            const score = Math.round(total / items.length);
            renderScaleIndicator(echelleTitle, echelle, score);
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'result-item';
                const questionSpan = document.createElement('div');
                questionSpan.className = 'result-question';
                questionSpan.textContent = item.question;
                const answerSpan = document.createElement('div');
                answerSpan.className = 'result-answer';
                answerSpan.textContent = `${tr().answerPrefix} ${item.answer}`;
                itemDiv.appendChild(questionSpan);
                itemDiv.appendChild(answerSpan);
                echelleDiv.appendChild(itemDiv);
            });
            domaineDiv.appendChild(echelleDiv);
        }
        resultsContent.appendChild(domaineDiv);
        const scaleScores = Object.keys(groupedByDomaine[domaine]).map(echelle => {
            const items = groupedByDomaine[domaine][echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            return Math.round(total / items.length);
        });
        domainScores[domaine] = {
            total: scaleScores.reduce((sum, value) => sum + value, 0),
            count: scaleScores.length
        };
    }
    renderOverallChart(domainScores);
}
function renderLoadedFilesSummary(loadedFiles) {
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '';
    const scaleValuesByDomain = {};
    const allDomains = new Set();
    const datasets = [];
    loadedFiles.forEach((loadedFile, fileIndex) => {
        const fileAnswers = loadedFile.answers || loadedFile;
        const fileName = loadedFile.fileName || tr().fileFallback(fileIndex + 1);
        const summary = buildDomainSummary(fileAnswers);
        const labels = Object.keys(summary.domainScores);
        labels.forEach(domain => allDomains.add(domain));
        const data = labels.map(domain => {
            const score = summary.domainScores[domain];
            return score ? Math.round(score.total / score.count) : 0;
        });
        const pointColors = data.map(score => getScoreColor(score));
        datasets.push({
            label: fileName,
            data,
            fill: false,
            backgroundColor: pointColors.map(color => `${color}40`),
            borderColor: pointColors,
            pointBackgroundColor: pointColors,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: pointColors,
            pointHoverBorderColor: '#fff'
        });
        for (const domaine in summary.domainScores) {
            if (!scaleValuesByDomain[domaine]) scaleValuesByDomain[domaine] = {};
            for (const echelle in summary.scaleStatsByDomain[domaine]) {
                if (!scaleValuesByDomain[domaine][echelle]) scaleValuesByDomain[domaine][echelle] = [];
                scaleValuesByDomain[domaine][echelle].push(summary.scaleStatsByDomain[domaine][echelle]);
            }
        }
    });
    renderOverallChart(Array.from(allDomains), datasets);
    const summaryTitle = document.createElement('h3');
    summaryTitle.textContent = tr().aggregatedStatsTitle;
    summaryTitle.style.marginTop = '20px';
    resultsContent.appendChild(summaryTitle);
    for (const domaine in scaleValuesByDomain) {
        const domainCard = document.createElement('div');
        domainCard.className = 'domaine';
        const domainTitle = document.createElement('div');
        domainTitle.className = 'domaine-title';
        domainTitle.textContent = domaine;
        domainCard.appendChild(domainTitle);
        const table = document.createElement('table');
        table.className = 'summary-table';
        const thead = document.createElement('thead');
        const headRow = document.createElement('tr');
        [tr().thScale, tr().thMean, tr().thMedian, tr().thMin, tr().thMax].forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headRow.appendChild(th);
        });
        thead.appendChild(headRow);
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        for (const echelle in scaleValuesByDomain[domaine]) {
            const row = document.createElement('tr');
            const values = scaleValuesByDomain[domaine][echelle];
            const meanValue = calculateMean(values);
            const medianValue = calculateMedian(values);
            const minValue = calculateMin(values);
            const maxValue = calculateMax(values);
            const echelleCell = document.createElement('td');
            echelleCell.textContent = echelle;
            row.appendChild(echelleCell);
            [meanValue, medianValue, minValue, maxValue].forEach(value => {
                const statCell = document.createElement('td');
                //statCell.textContent = `${value}%`;
                statCell.style.backgroundColor = getScoreColor(value);
                statCell.style.color = '#fff';
                statCell.style.fontWeight = '600';
                row.appendChild(statCell);
            });
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        domainCard.appendChild(table);
        resultsContent.appendChild(domainCard);
    }
}
function renderOverallChart(labelsOrDomainScores, datasets) {
    const overallChartContainer = document.getElementById('overallChartContainer');
    overallChartContainer.style.display = 'block';
    let labels;
    let chartDatasets;
    if (Array.isArray(labelsOrDomainScores) && Array.isArray(datasets)) {
        labels = labelsOrDomainScores;
        chartDatasets = datasets;
    } else {
        const domainScores = labelsOrDomainScores;
        labels = Object.keys(domainScores);
        const data = labels.map(label => Math.round(domainScores[label].total / domainScores[label].count));
        const pointColors = data.map(score => getScoreColor(score));
        chartDatasets = [{
            label: '',
            data,
            fill: false,
            backgroundColor: pointColors.map(color => `${color}40`),
            borderColor: pointColors,
            pointBackgroundColor: pointColors,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: pointColors,
            pointHoverBorderColor: '#fff'
        }];
    }
    const ctx = document.getElementById('overallChart');
    if (window.overallChart && typeof window.overallChart.destroy === 'function') {
        window.overallChart.destroy();
    }
    window.overallChart = new Chart(ctx, {
        type: 'radar',
        data: { labels, datasets: chartDatasets },
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { stepSize: 20, display: false },
                    pointLabels: { font: { size: 14 } }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    backgroundColor: function(context) {
                        const point = context.tooltip && context.tooltip.dataPoints && context.tooltip.dataPoints[0];
                        if (!point) return '#333333';
                        return getPointTooltipColor(point.dataset, point.dataIndex);
                    },
                    titleColor: function(context) {
                        const point = context.tooltip && context.tooltip.dataPoints && context.tooltip.dataPoints[0];
                        if (!point) return '#ffffff';
                        const color = getPointTooltipColor(point.dataset, point.dataIndex);
                        return getContrastTextColor(color);
                    },
                    bodyColor: function(context) {
                        const point = context.tooltip && context.tooltip.dataPoints && context.tooltip.dataPoints[0];
                        if (!point) return '#ffffff';
                        const color = getPointTooltipColor(point.dataset, point.dataIndex);
                        return getContrastTextColor(color);
                    },
                    footerColor: function(context) {
                        const point = context.tooltip && context.tooltip.dataPoints && context.tooltip.dataPoints[0];
                        if (!point) return '#ffffff';
                        const color = getPointTooltipColor(point.dataset, point.dataIndex);
                        return getContrastTextColor(color);
                    },
                    borderColor: function(context) {
                        const point = context.tooltip && context.tooltip.dataPoints && context.tooltip.dataPoints[0];
                        if (!point) return '#333333';
                        return getPointTooltipColor(point.dataset, point.dataIndex);
                    },
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            return `${label}`;
                        },
                        labelColor: function(context) {
                            const dataset = context.dataset || {};
                            const color = getPointTooltipColor(dataset, context.dataIndex);
                            return { borderColor: color, backgroundColor: color };
                        }
                    }
                }
            },
            elements: {
                point: { pointRadius: 7, pointStyle: 'circle' }
            }
        }
    });
}
function displayResults() {
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '';
    const form = document.getElementById('copsocForm');
    const formData = new FormData(form);
    const answers = [];
    for (let i = 0; i < displayedQuestions.length; i++) {
        const answerIndex = formData.get(`q${i}`);
        if (answerIndex !== null) {
            const q = displayedQuestions[i];
            const numericIndex = parseInt(answerIndex, 10);
            answers.push({
                question: q.text,
                answer: q.options[numericIndex],
                answerIndex: numericIndex,
                domaine: q.domaine,
                echelle: q.echelle,
                options: q.options
            });
        }
    }
    const groupedByDomaine = {};
    answers.forEach(a => {
        if (!groupedByDomaine[a.domaine]) groupedByDomaine[a.domaine] = {};
        if (!groupedByDomaine[a.domaine][a.echelle]) groupedByDomaine[a.domaine][a.echelle] = [];
        groupedByDomaine[a.domaine][a.echelle].push(a);
    });
    const domainScores = {};
    for (const domaine in groupedByDomaine) {
        const domaineDiv = document.createElement('div');
        domaineDiv.className = 'domaine';
        const domaineTitle = document.createElement('div');
        domaineTitle.className = 'domaine-title';
        domaineTitle.textContent = domaine;
        domaineDiv.appendChild(domaineTitle);
        for (const echelle in groupedByDomaine[domaine]) {
            const echelleDiv = document.createElement('div');
            echelleDiv.className = 'echelle';
            const echelleTitle = document.createElement('div');
            echelleTitle.className = 'echelle-title';
            echelleTitle.textContent = echelle;
            echelleDiv.appendChild(echelleTitle);
            const items = groupedByDomaine[domaine][echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            const score = Math.round(total / items.length);
            renderScaleIndicator(echelleTitle, echelle, score);
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'result-item';
                const questionSpan = document.createElement('div');
                questionSpan.className = 'result-question';
                questionSpan.textContent = item.question;
                const answerSpan = document.createElement('div');
                answerSpan.className = 'result-answer';
                answerSpan.textContent = `${tr().answerPrefix} ${item.answer}`;
                itemDiv.appendChild(questionSpan);
                itemDiv.appendChild(answerSpan);
                echelleDiv.appendChild(itemDiv);
            });
            domaineDiv.appendChild(echelleDiv);
        }
        resultsContent.appendChild(domaineDiv);
        const scaleScores = Object.keys(groupedByDomaine[domaine]).map(echelle => {
            const items = groupedByDomaine[domaine][echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            return Math.round(total / items.length);
        });
        domainScores[domaine] = {
            total: scaleScores.reduce((sum, value) => sum + value, 0),
            count: scaleScores.length
        };
    }
    renderOverallChart(domainScores);
    ensureResultsVisible();
    sunburstChart();
}
function submitForm() {
    const form = document.getElementById('copsocForm');
    if (form.checkValidity()) {
        displayResults();
    } else {
        alert(tr().alertCompleteBeforeSubmit);
    }
}
function randomlyFillForm() {
    const form = document.getElementById('copsocForm');
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const options = question.querySelectorAll('input[type="radio"]');
        if (options.length > 0) {
            const randomIndex = Math.floor(Math.random() * options.length);
            options[randomIndex].checked = true;
        }
    });
    updateActionButtons();
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.scrollIntoView({ behavior: 'smooth' });
    }
}
function resetForm() {
    const form = document.getElementById('copsocForm');
    form.reset();
    updateActionButtons();
}
function clearSunburstChart() {
    const sunburstContainer = document.getElementById('myDiv');
    if (!sunburstContainer) return;
    if (window.Plotly && typeof Plotly.purge === 'function') {
        Plotly.purge(sunburstContainer);
    }
    sunburstContainer.innerHTML = '';
    sunburstContainer.style.display = 'none';
}
function sunburstChart(sourceAnswers) {
    const sunburstContainer = document.getElementById('myDiv');
    if (!sunburstContainer) return;
    let answers = [];
    if (Array.isArray(sourceAnswers) && sourceAnswers.length > 0) {
        answers = sourceAnswers
            .filter(item => item && Array.isArray(item.options))
            .map(item => ({
                answerIndex: item.answerIndex,
                domaine: item.domaine,
                echelle: item.echelle,
                options: item.options
            }));
    } else {
        const form = document.getElementById('copsocForm');
        if (!form) return;
        const formData = new FormData(form);
        for (let i = 0; i < displayedQuestions.length; i++) {
            const answerIndex = formData.get(`q${i}`);
            if (answerIndex === null) continue;
            const q = displayedQuestions[i];
            const numericIndex = parseInt(answerIndex, 10);
            if (Number.isNaN(numericIndex)) continue;
            answers.push({
                answerIndex: numericIndex,
                domaine: q.domaine,
                echelle: q.echelle,
                options: q.options
            });
        }
    }
    if (!answers.length) return;
    const groupedByDomaine = {};
    answers.forEach(answer => {
        if (!groupedByDomaine[answer.domaine]) groupedByDomaine[answer.domaine] = {};
        if (!groupedByDomaine[answer.domaine][answer.echelle]) groupedByDomaine[answer.domaine][answer.echelle] = [];
        groupedByDomaine[answer.domaine][answer.echelle].push(answer);
    });
    const labels = ['*'];
    const parents = [''];
    const values = [answers.length];
    const colors = ['#95a5a6'];
    const scores = [0];
    const domainScores = [];
    Object.keys(groupedByDomaine).forEach(domaine => {
        const echelles = groupedByDomaine[domaine];
        const echelleNames = Object.keys(echelles);
        const echelleScores = [];
        let domaineValue = 0;
        echelleNames.forEach(echelle => {
            const items = echelles[echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            const echelleScore = Math.round(total / items.length);
            echelleScores.push(echelleScore);
            domaineValue += items.length;
            labels.push(echelle);
            parents.push(domaine);
            values.push(items.length);
            colors.push(getScoreColor(echelleScore));
            scores.push(echelleScore);
        });
        const domaineScore = Math.round(echelleScores.reduce((sum, score) => sum + score, 0) / echelleScores.length);
        domainScores.push(domaineScore);
        labels.push(domaine);
        parents.push('*');
        values.push(domaineValue);
        colors.push(getScoreColor(domaineScore));
        scores.push(domaineScore);
    });
    const copsoqScore = Math.round(domainScores.reduce((sum, score) => sum + score, 0) / domainScores.length);
    colors[0] = getScoreColor(copsoqScore);
    scores[0] = copsoqScore;
    const data = [{
        type: 'sunburst',
        labels,
        parents,
        values,
        customdata: scores,
        leaf: { opacity: 0.8 },
        marker: {
            colors,
            line: { width: 1 }
        },
        branchvalues: 'total',
        //hovertemplate: '%{label}<br>%{customdata}%<extra></extra>',
        hovertemplate: '%{label}<br><extra></extra>',
        hoverlabel: {
            bgcolor: colors,
            font: { color: '#ffffff', size: 18 },
            bordercolor: colors
        }
    }];
    const layout = {
        margin: { l: 0, r: 0, b: 0, t: 0 },
        width: 800,
        height: 800,
        font: { size: 16 }
    };
    const config = {
        responsive: true,
        sendDataToCloud: false,
        displaylogo: false,
        toImageButtonOptions: {
            format: 'png',
            filename: 'copsoq_sunburst-' + Date.now(),
            height: 1600,
            width: 1600,
            scale: 1
        }
    };
    sunburstContainer.style.display = 'block';
    Plotly.newPlot(sunburstContainer, data, layout, config);
}
window.onload = generateForm;