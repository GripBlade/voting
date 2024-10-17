import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { CandidateCreate, VoterCreated } from "../generated/Create/Create"

export function createCandidateCreateEvent(
  candidateId: BigInt,
  age: string,
  name: string,
  image: string,
  voteCount: BigInt,
  _address: Address,
  ipfs: string
): CandidateCreate {
  let candidateCreateEvent = changetype<CandidateCreate>(newMockEvent())

  candidateCreateEvent.parameters = new Array()

  candidateCreateEvent.parameters.push(
    new ethereum.EventParam(
      "candidateId",
      ethereum.Value.fromUnsignedBigInt(candidateId)
    )
  )
  candidateCreateEvent.parameters.push(
    new ethereum.EventParam("age", ethereum.Value.fromString(age))
  )
  candidateCreateEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  candidateCreateEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )
  candidateCreateEvent.parameters.push(
    new ethereum.EventParam(
      "voteCount",
      ethereum.Value.fromUnsignedBigInt(voteCount)
    )
  )
  candidateCreateEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  candidateCreateEvent.parameters.push(
    new ethereum.EventParam("ipfs", ethereum.Value.fromString(ipfs))
  )

  return candidateCreateEvent
}

export function createVoterCreatedEvent(
  voter_voterId: BigInt,
  voter_name: string,
  voter_image: string,
  voter_address: Address,
  voter_allowed: BigInt,
  voter_voted: boolean,
  voter_vote: BigInt,
  voter_ipfs: string
): VoterCreated {
  let voterCreatedEvent = changetype<VoterCreated>(newMockEvent())

  voterCreatedEvent.parameters = new Array()

  voterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voter_voterId",
      ethereum.Value.fromUnsignedBigInt(voter_voterId)
    )
  )
  voterCreatedEvent.parameters.push(
    new ethereum.EventParam("voter_name", ethereum.Value.fromString(voter_name))
  )
  voterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voter_image",
      ethereum.Value.fromString(voter_image)
    )
  )
  voterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voter_address",
      ethereum.Value.fromAddress(voter_address)
    )
  )
  voterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voter_allowed",
      ethereum.Value.fromUnsignedBigInt(voter_allowed)
    )
  )
  voterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voter_voted",
      ethereum.Value.fromBoolean(voter_voted)
    )
  )
  voterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voter_vote",
      ethereum.Value.fromUnsignedBigInt(voter_vote)
    )
  )
  voterCreatedEvent.parameters.push(
    new ethereum.EventParam("voter_ipfs", ethereum.Value.fromString(voter_ipfs))
  )

  return voterCreatedEvent
}
