function generateReminders() {
  const byPlayer = {}
  function addCard (obj, playerId, cardName) {
    if (playerId) {
      if (!obj[playerId]) {
        obj[playerId] = []
      }
      obj[playerId].push(cardName)
    }
  }

  const vetPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S203_Veterinarian)")
  if (vetPlayer) {
    const playerId = vetPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Veterinarian')
  }

  const qlabPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S225_QuarantineLab)")
  if (qlabPlayer) {
    const playerId = qlabPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Quarantine Lab')
  }

  const explorerPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S262_Explorer)")
  if (explorerPlayer) {
    const playerId = explorerPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Explorer')
  }

  const diversityPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S219_DiversityResearcher)")
  if (diversityPlayer) {
    const playerId = diversityPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Diversity Researcher')
  }

  const scienceLabPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S201_ScienceLab)")
  if (ScienceLabPlayer) {
    const playerId = ScienceLabPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Science Lab')
}

  const spokespersonPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S202_Spokesperson)")
  if (SpokespersonPlayer) {
    const playerId = SpokespersonPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Spokesperson')
  }

  const scienceMuseumPlayer  = document.querySelector(".player-board-inPlay-sponsors:has(#card-S204_ScienceMuseum )")
  if (ScienceMuseumPlayer) {
    const playerId = ScienceMuseumPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Science Museum')
   }

  const medicalBreakthroughPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S206_MedicalBreakthrough)")
  if (MedicalBreakthroughPlayer) {
    const playerId = MedicalBreakthroughPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Medical Breakthrough')
  }

  const scienceLibraryPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S208_ScienceLibrary)")
  if (ScienceLibraryPlayer) {
    const playerId = ScienceLibraryPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Science Library')
  }

  const technologyInstitutePlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S209_TechnologyInstitute)")
  if (TechnologyInstitutePlayer) {
    const playerId = TechnologyInstitutePlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Technology Institute')
  }

  const breedingCooperationPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S215_BreedingCooperation)")
  if (BreedingCooperationPlayer) {
    const playerId = BreedingCooperationPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Breeding Cooperation')
  }

  const talentedCommunicatorPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S216_TalentedCommunicator)")
  if (TalentedCommunicatorPlayer) {
    const playerId = TalentedCommunicatorPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Talented Communicator')
  }

  const engineerPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S217_Engineer)")
  if (EngineerPlayer) {
    const playerId = EngineerPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Engineer')
  }

  const breedingProgramPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S218_BreedingProgram)")
  if (BreedingProgramPlayer) {
    const playerId = BreedingProgramPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Breeding Program')
  }

  const migrationRecordingPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S224_MigrationRecording)")
  if (MigrationRecordingPlayer) {
    const playerId = MigrationRecordingPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Migration Recording')
  }

  const expertInSmallAnimalsPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S229_ExpertInSmallAnimals)")
  if (ExpertInSmallAnimalsPlayer) {
    const playerId = ExpertInSmallAnimalsPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Expert: SmallAnimals')
  }

  const expertInLargeAnimalsPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S230_ExpertInLargeAnimals)")
  if (ExpertInLargeAnimalsPlayer) {
    const playerId = ExpertInLargeAnimalsPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Expert: LargeAnimals')
  }

  const primatologistPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S236_Primatologist)")
  if (PrimatologistPlayer) {
    const playerId = PrimatologistPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Primatologist')
  }

  const herpetologistPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S237_Herpetologist)")
  if (HerpetologistPlayer) {
    const playerId = HerpetologistPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Herpetologist')
  }

  const ornithologistPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S238_Ornithologist)")
  if (OrnithologistPlayer) {
    const playerId = OrnithologistPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Ornithologist')
  }

  const expertInPredatorsPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S239_ExpertInPredators)")
  if (ExpertInPredatorsPlayer) {
    const playerId = ExpertInPredatorsPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Expert: Predators')
  }

  const expertInHerbivoresPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S240_ExpertInHerbivores)")
  if (ExpertInHerbivoresPlayer) {
    const playerId = ExpertInHerbivoresPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Expert: Herbivores')
  }

  const sideEntrancePlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S257_SideEntrance)")
  if (SideEntrancePlayer) {
    const playerId = SideEntrancePlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Side Boob')
  }

  const africanBushElephantPlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A426_AfricanBushElephant)")
  if (AfricanBushElephantPlayer) {
    const playerId = AfricanBushElephantPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'African Elephant')
  }

  const asianElephantPlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A431_AsianElephant)")
  if (AsianElephantPlayer) {
    const playerId = AsianElephantPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Asian Elephant')
  }

  const whiteRhinocerosPlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A427_WhiteRhinoceros)")
  if (WhiteRhinocerosPlayer) {
    const playerId = WhiteRhinocerosPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'WhiteRhinoceros')
  }

  const indianRhinocerosPlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A432_IndianRhinoceros)")
  if (IndianRhinocerosPlayer) {
    const playerId = IndianRhinocerosPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'IndianRhinoceros')
  }

  const baldEaglePlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A505_BaldEagle)")
  if (BaldEaglePlayer) {
    const playerId = BaldEaglePlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Bald Eagle')
  }

  const goldenEaglePlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A509_GoldenEagle)")
  if (GoldenEaglePlayer) {
    const playerId = GoldenEaglePlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Golden Eagle')
  }


  const franchiseBusinessPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S265_FranchiseBusiness)")
  if (franchiseBusinessPlayer) {
    const playerId = franchiseBusinessPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Franchise Business')
  }

  const marineBiologistPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S266_MarineBiologist)")
  if (marineBiologistPlayer) {
    const playerId = marineBiologistPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Marine Biologist')
  }

  const marineResearchExpeditionPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S270_MarineResearchExpedition)")
  if (marineResearchExpeditionPlayer) {
    const playerId = marineResearchExpeditionPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Marine Research Expedition')
  }

  const expansionAreaPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S272_ExpansionArea)")
  if (expansionAreaPlayer) {
    const playerId = expansionAreaPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Expansion Area')
  }

  const publicationsPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S273_Publications)")
  if (publicationsPlayer) {
    const playerId = publicationsPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Publications')
  }

  const horseWhispererPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S275_HorseWhisperer)")
  if (horseWhispererPlayer) {
    const playerId = horseWhispererPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Horse Whisperer')
  }



  const playerLookup = Object.keys(byPlayer).reduce((obj, playerId) => {
    const playerDiv = document.querySelector(`#player_name_${playerId} a`)

    obj[playerId] = {
      id: playerId, 
      name: playerDiv.innerHTML,
      color: playerDiv.style.color,
    }

    return obj
  }, {})

  function formatPlayerCards (playerCards) {
    const [id, cards] = playerCards
    const { name, color } = playerLookup[id]

    return `<div><span style="font-weight: 600; color: ${color};">${name}:</span> ${cards.join(', ')}</div>`
  }

  ourBox.innerHTML = 
    `<div style="font-style: italic; font-size: 12px; width: 60px; margin-left: 20px; color: #222;">Reminders</div>
      <div style="justify-content: center; display: flex; flex-direction: row; gap: 8px; align-items: center; margin-right: 80px; width: 100%">
      ${Object.entries(byPlayer).map(formatPlayerCards).join('')}
    </div>`
}


const mainHeader = document.querySelector('#page-title')
mainHeader.insertAdjacentHTML('afterend', `<div id="reminder-box" style="margin-top: 8px; background-color: #f0f0f0; box-shadow: 0 3px 8px rgba(0,0,0,.3); padding-top: 8px; padding-bottom: 8px; display: flex; flex-direction: row; align-items: center;"></div>`)
const ourBox = document.querySelector('#reminder-box')

setInterval(generateReminders, 5000)

generateReminders()

console.log('Ark Nova Reminders loaded successfully')
