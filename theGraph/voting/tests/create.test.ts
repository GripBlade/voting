import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CandidateCreate } from "../generated/schema"
import { CandidateCreate as CandidateCreateEvent } from "../generated/Create/Create"
import { handleCandidateCreate } from "../src/create"
import { createCandidateCreateEvent } from "./create-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let candidateId = BigInt.fromI32(234)
    let age = "Example string value"
    let name = "Example string value"
    let image = "Example string value"
    let voteCount = BigInt.fromI32(234)
    let _address = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let ipfs = "Example string value"
    let newCandidateCreateEvent = createCandidateCreateEvent(
      candidateId,
      age,
      name,
      image,
      voteCount,
      _address,
      ipfs
    )
    handleCandidateCreate(newCandidateCreateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CandidateCreate created and stored", () => {
    assert.entityCount("CandidateCreate", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CandidateCreate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "candidateId",
      "234"
    )
    assert.fieldEquals(
      "CandidateCreate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "age",
      "Example string value"
    )
    assert.fieldEquals(
      "CandidateCreate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "CandidateCreate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "image",
      "Example string value"
    )
    assert.fieldEquals(
      "CandidateCreate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "voteCount",
      "234"
    )
    assert.fieldEquals(
      "CandidateCreate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_address",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CandidateCreate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ipfs",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
