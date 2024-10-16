import {
  CandidateCreate as CandidateCreateEvent,
  VoterCreated as VoterCreatedEvent
} from "../generated/Create/Create"
import { CandidateCreate, VoterCreated } from "../generated/schema"

export function handleCandidateCreate(event: CandidateCreateEvent): void {
  let entity = new CandidateCreate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.candidateId = event.params.candidateId
  entity.age = event.params.age
  entity.name = event.params.name
  entity.image = event.params.image
  entity.voteCount = event.params.voteCount
  entity._address = event.params._address
  entity.ipfs = event.params.ipfs

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoterCreated(event: VoterCreatedEvent): void {
  let entity = new VoterCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.voter_voterId = event.params.voter_voterId
  entity.voter_name = event.params.voter_name
  entity.voter_image = event.params.voter_image
  entity.voter_address = event.params.voter_address
  entity.voter_allowed = event.params.voter_allowed
  entity.voter_voted = event.params.voter_voted
  entity.voter_vote = event.params.voter_vote
  entity.voter_ipfs = event.params.voter_ipfs

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
