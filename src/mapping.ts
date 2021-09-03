import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  Born as BornEvent,
  Captured as CapturedEvent,
  Missed as MissedEvent,
  Thwarted as ThwartedEvent,
  Transfer as TransferEvent
} from "../generated/EtherFreakers/EtherFreakers"
import {
  Approval,
  ApprovalForAll,
  Born,
  Captured,
  Missed,
  Thwarted,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleBorn(event: BornEvent): void {
  let entity = new Born(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.mother = event.params.mother
  entity.energy = event.params.energy
  entity.freakerId = event.params.freakerId
  entity.freaker_species = event.params.freaker.species
  entity.freaker_stamina = event.params.freaker.stamina
  entity.freaker_fortune = event.params.freaker.fortune
  entity.freaker_agility = event.params.freaker.agility
  entity.freaker_offense = event.params.freaker.offense
  entity.freaker_defense = event.params.freaker.defense
  entity.save()
}

export function handleCaptured(event: CapturedEvent): void {
  let entity = new Captured(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.attacker = event.params.attacker
  entity.defender = event.params.defender
  entity.sourceId = event.params.sourceId
  entity.targetId = event.params.targetId
  entity.save()
}

export function handleMissed(event: MissedEvent): void {
  let entity = new Missed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.attacker = event.params.attacker
  entity.defender = event.params.defender
  entity.sourceId = event.params.sourceId
  entity.targetId = event.params.targetId
  entity.save()
}

export function handleThwarted(event: ThwartedEvent): void {
  let entity = new Thwarted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.attacker = event.params.attacker
  entity.defender = event.params.defender
  entity.sourceId = event.params.sourceId
  entity.targetId = event.params.targetId
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}
