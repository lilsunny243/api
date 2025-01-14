// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { BitvecOrderLsb0, PalletReferendaReferendumInfo, PalletReferendaReferendumStatus, PalletTransactionPaymentChargeTransactionPayment, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesHrmpChannelId, PolkadotPrimitivesV4AssignmentAppPublic, PolkadotPrimitivesV4BackedCandidate, PolkadotPrimitivesV4CandidateCommitments, PolkadotPrimitivesV4CandidateDescriptor, PolkadotPrimitivesV4CandidateReceipt, PolkadotPrimitivesV4CollatorAppPublic, PolkadotPrimitivesV4CollatorAppSignature, PolkadotPrimitivesV4CommittedCandidateReceipt, PolkadotPrimitivesV4CoreOccupied, PolkadotPrimitivesV4DisputeState, PolkadotPrimitivesV4DisputeStatement, PolkadotPrimitivesV4DisputeStatementSet, PolkadotPrimitivesV4ExecutorParams, PolkadotPrimitivesV4ExecutorParamsExecutorParam, PolkadotPrimitivesV4IndexedVecGroupIndex, PolkadotPrimitivesV4IndexedVecValidatorIndex, PolkadotPrimitivesV4InherentData, PolkadotPrimitivesV4InvalidDisputeStatementKind, PolkadotPrimitivesV4ParathreadClaim, PolkadotPrimitivesV4ParathreadEntry, PolkadotPrimitivesV4PvfCheckStatement, PolkadotPrimitivesV4PvfExecTimeoutKind, PolkadotPrimitivesV4PvfPrepTimeoutKind, PolkadotPrimitivesV4ScrapedOnChainVotes, PolkadotPrimitivesV4SessionInfo, PolkadotPrimitivesV4SignedUncheckedSigned, PolkadotPrimitivesV4UpgradeGoAhead, PolkadotPrimitivesV4UpgradeRestriction, PolkadotPrimitivesV4ValidDisputeStatementKind, PolkadotPrimitivesV4ValidatorAppPublic, PolkadotPrimitivesV4ValidatorAppSignature, PolkadotPrimitivesV4ValidityAttestation, PolkadotPrimitivesVstagingAsyncBackingParams, PolkadotPrimitivesVstagingSlashingDisputeProof, PolkadotPrimitivesVstagingSlashingDisputesTimeSlot, PolkadotPrimitivesVstagingSlashingPendingSlashes, PolkadotPrimitivesVstagingSlashingSlashingOffenceKind, PolkadotRuntimeCommonAuctionsPalletCall, PolkadotRuntimeCommonAuctionsPalletError, PolkadotRuntimeCommonAuctionsPalletEvent, PolkadotRuntimeCommonClaimsEcdsaSignature, PolkadotRuntimeCommonClaimsPalletCall, PolkadotRuntimeCommonClaimsPalletError, PolkadotRuntimeCommonClaimsPalletEvent, PolkadotRuntimeCommonClaimsPrevalidateAttests, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeCommonCrowdloanFundInfo, PolkadotRuntimeCommonCrowdloanLastContribution, PolkadotRuntimeCommonCrowdloanPalletCall, PolkadotRuntimeCommonCrowdloanPalletError, PolkadotRuntimeCommonCrowdloanPalletEvent, PolkadotRuntimeCommonParasRegistrarPalletCall, PolkadotRuntimeCommonParasRegistrarPalletError, PolkadotRuntimeCommonParasRegistrarPalletEvent, PolkadotRuntimeCommonParasRegistrarParaInfo, PolkadotRuntimeCommonSlotsPalletCall, PolkadotRuntimeCommonSlotsPalletError, PolkadotRuntimeCommonSlotsPalletEvent, PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin, PolkadotRuntimeNposCompactSolution16, PolkadotRuntimeOriginCaller, PolkadotRuntimeParachainsConfigurationHostConfiguration, PolkadotRuntimeParachainsConfigurationPalletCall, PolkadotRuntimeParachainsConfigurationPalletError, PolkadotRuntimeParachainsDisputesDisputeLocation, PolkadotRuntimeParachainsDisputesDisputeResult, PolkadotRuntimeParachainsDisputesPalletCall, PolkadotRuntimeParachainsDisputesPalletError, PolkadotRuntimeParachainsDisputesPalletEvent, PolkadotRuntimeParachainsDisputesSlashingPalletCall, PolkadotRuntimeParachainsDisputesSlashingPalletError, PolkadotRuntimeParachainsHrmpHrmpChannel, PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest, PolkadotRuntimeParachainsHrmpPalletCall, PolkadotRuntimeParachainsHrmpPalletError, PolkadotRuntimeParachainsHrmpPalletEvent, PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord, PolkadotRuntimeParachainsInclusionCandidatePendingAvailability, PolkadotRuntimeParachainsInclusionPalletCall, PolkadotRuntimeParachainsInclusionPalletError, PolkadotRuntimeParachainsInclusionPalletEvent, PolkadotRuntimeParachainsInclusionUmpQueueId, PolkadotRuntimeParachainsInitializerBufferedSessionChange, PolkadotRuntimeParachainsInitializerPalletCall, PolkadotRuntimeParachainsOriginPalletOrigin, PolkadotRuntimeParachainsParasInherentPalletCall, PolkadotRuntimeParachainsParasInherentPalletError, PolkadotRuntimeParachainsParasPalletCall, PolkadotRuntimeParachainsParasPalletError, PolkadotRuntimeParachainsParasPalletEvent, PolkadotRuntimeParachainsParasParaGenesisArgs, PolkadotRuntimeParachainsParasParaLifecycle, PolkadotRuntimeParachainsParasParaPastCodeMeta, PolkadotRuntimeParachainsParasPvfCheckActiveVoteState, PolkadotRuntimeParachainsParasPvfCheckCause, PolkadotRuntimeParachainsParasReplacementTimes, PolkadotRuntimeParachainsSchedulerAssignmentKind, PolkadotRuntimeParachainsSchedulerCoreAssignment, PolkadotRuntimeParachainsSchedulerParathreadClaimQueue, PolkadotRuntimeParachainsSchedulerQueuedParathread, PolkadotRuntimeParachainsSharedPalletCall, PolkadotRuntimeProxyType, PolkadotRuntimeRuntime, PolkadotRuntimeRuntimeHoldReason, PolkadotRuntimeSessionKeys, SpCoreEcdsaPublic, SpRuntimeMultiSigner, XcmDoubleEncoded, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiLocation, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedAssetId, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedResponse, XcmVersionedXcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    BitvecOrderLsb0: BitvecOrderLsb0;
    PalletReferendaReferendumInfo: PalletReferendaReferendumInfo;
    PalletReferendaReferendumStatus: PalletReferendaReferendumStatus;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    PalletXcmQueryStatus: PalletXcmQueryStatus;
    PalletXcmRemoteLockedFungibleRecord: PalletXcmRemoteLockedFungibleRecord;
    PalletXcmVersionMigrationStage: PalletXcmVersionMigrationStage;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesHrmpChannelId: PolkadotParachainPrimitivesHrmpChannelId;
    PolkadotPrimitivesV4AssignmentAppPublic: PolkadotPrimitivesV4AssignmentAppPublic;
    PolkadotPrimitivesV4BackedCandidate: PolkadotPrimitivesV4BackedCandidate;
    PolkadotPrimitivesV4CandidateCommitments: PolkadotPrimitivesV4CandidateCommitments;
    PolkadotPrimitivesV4CandidateDescriptor: PolkadotPrimitivesV4CandidateDescriptor;
    PolkadotPrimitivesV4CandidateReceipt: PolkadotPrimitivesV4CandidateReceipt;
    PolkadotPrimitivesV4CollatorAppPublic: PolkadotPrimitivesV4CollatorAppPublic;
    PolkadotPrimitivesV4CollatorAppSignature: PolkadotPrimitivesV4CollatorAppSignature;
    PolkadotPrimitivesV4CommittedCandidateReceipt: PolkadotPrimitivesV4CommittedCandidateReceipt;
    PolkadotPrimitivesV4CoreOccupied: PolkadotPrimitivesV4CoreOccupied;
    PolkadotPrimitivesV4DisputeState: PolkadotPrimitivesV4DisputeState;
    PolkadotPrimitivesV4DisputeStatement: PolkadotPrimitivesV4DisputeStatement;
    PolkadotPrimitivesV4DisputeStatementSet: PolkadotPrimitivesV4DisputeStatementSet;
    PolkadotPrimitivesV4ExecutorParams: PolkadotPrimitivesV4ExecutorParams;
    PolkadotPrimitivesV4ExecutorParamsExecutorParam: PolkadotPrimitivesV4ExecutorParamsExecutorParam;
    PolkadotPrimitivesV4IndexedVecGroupIndex: PolkadotPrimitivesV4IndexedVecGroupIndex;
    PolkadotPrimitivesV4IndexedVecValidatorIndex: PolkadotPrimitivesV4IndexedVecValidatorIndex;
    PolkadotPrimitivesV4InherentData: PolkadotPrimitivesV4InherentData;
    PolkadotPrimitivesV4InvalidDisputeStatementKind: PolkadotPrimitivesV4InvalidDisputeStatementKind;
    PolkadotPrimitivesV4ParathreadClaim: PolkadotPrimitivesV4ParathreadClaim;
    PolkadotPrimitivesV4ParathreadEntry: PolkadotPrimitivesV4ParathreadEntry;
    PolkadotPrimitivesV4PvfCheckStatement: PolkadotPrimitivesV4PvfCheckStatement;
    PolkadotPrimitivesV4PvfExecTimeoutKind: PolkadotPrimitivesV4PvfExecTimeoutKind;
    PolkadotPrimitivesV4PvfPrepTimeoutKind: PolkadotPrimitivesV4PvfPrepTimeoutKind;
    PolkadotPrimitivesV4ScrapedOnChainVotes: PolkadotPrimitivesV4ScrapedOnChainVotes;
    PolkadotPrimitivesV4SessionInfo: PolkadotPrimitivesV4SessionInfo;
    PolkadotPrimitivesV4SignedUncheckedSigned: PolkadotPrimitivesV4SignedUncheckedSigned;
    PolkadotPrimitivesV4UpgradeGoAhead: PolkadotPrimitivesV4UpgradeGoAhead;
    PolkadotPrimitivesV4UpgradeRestriction: PolkadotPrimitivesV4UpgradeRestriction;
    PolkadotPrimitivesV4ValidDisputeStatementKind: PolkadotPrimitivesV4ValidDisputeStatementKind;
    PolkadotPrimitivesV4ValidatorAppPublic: PolkadotPrimitivesV4ValidatorAppPublic;
    PolkadotPrimitivesV4ValidatorAppSignature: PolkadotPrimitivesV4ValidatorAppSignature;
    PolkadotPrimitivesV4ValidityAttestation: PolkadotPrimitivesV4ValidityAttestation;
    PolkadotPrimitivesVstagingAsyncBackingParams: PolkadotPrimitivesVstagingAsyncBackingParams;
    PolkadotPrimitivesVstagingSlashingDisputeProof: PolkadotPrimitivesVstagingSlashingDisputeProof;
    PolkadotPrimitivesVstagingSlashingDisputesTimeSlot: PolkadotPrimitivesVstagingSlashingDisputesTimeSlot;
    PolkadotPrimitivesVstagingSlashingPendingSlashes: PolkadotPrimitivesVstagingSlashingPendingSlashes;
    PolkadotPrimitivesVstagingSlashingSlashingOffenceKind: PolkadotPrimitivesVstagingSlashingSlashingOffenceKind;
    PolkadotRuntimeCommonAuctionsPalletCall: PolkadotRuntimeCommonAuctionsPalletCall;
    PolkadotRuntimeCommonAuctionsPalletError: PolkadotRuntimeCommonAuctionsPalletError;
    PolkadotRuntimeCommonAuctionsPalletEvent: PolkadotRuntimeCommonAuctionsPalletEvent;
    PolkadotRuntimeCommonClaimsEcdsaSignature: PolkadotRuntimeCommonClaimsEcdsaSignature;
    PolkadotRuntimeCommonClaimsPalletCall: PolkadotRuntimeCommonClaimsPalletCall;
    PolkadotRuntimeCommonClaimsPalletError: PolkadotRuntimeCommonClaimsPalletError;
    PolkadotRuntimeCommonClaimsPalletEvent: PolkadotRuntimeCommonClaimsPalletEvent;
    PolkadotRuntimeCommonClaimsPrevalidateAttests: PolkadotRuntimeCommonClaimsPrevalidateAttests;
    PolkadotRuntimeCommonClaimsStatementKind: PolkadotRuntimeCommonClaimsStatementKind;
    PolkadotRuntimeCommonCrowdloanFundInfo: PolkadotRuntimeCommonCrowdloanFundInfo;
    PolkadotRuntimeCommonCrowdloanLastContribution: PolkadotRuntimeCommonCrowdloanLastContribution;
    PolkadotRuntimeCommonCrowdloanPalletCall: PolkadotRuntimeCommonCrowdloanPalletCall;
    PolkadotRuntimeCommonCrowdloanPalletError: PolkadotRuntimeCommonCrowdloanPalletError;
    PolkadotRuntimeCommonCrowdloanPalletEvent: PolkadotRuntimeCommonCrowdloanPalletEvent;
    PolkadotRuntimeCommonParasRegistrarPalletCall: PolkadotRuntimeCommonParasRegistrarPalletCall;
    PolkadotRuntimeCommonParasRegistrarPalletError: PolkadotRuntimeCommonParasRegistrarPalletError;
    PolkadotRuntimeCommonParasRegistrarPalletEvent: PolkadotRuntimeCommonParasRegistrarPalletEvent;
    PolkadotRuntimeCommonParasRegistrarParaInfo: PolkadotRuntimeCommonParasRegistrarParaInfo;
    PolkadotRuntimeCommonSlotsPalletCall: PolkadotRuntimeCommonSlotsPalletCall;
    PolkadotRuntimeCommonSlotsPalletError: PolkadotRuntimeCommonSlotsPalletError;
    PolkadotRuntimeCommonSlotsPalletEvent: PolkadotRuntimeCommonSlotsPalletEvent;
    PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin: PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    PolkadotRuntimeNposCompactSolution16: PolkadotRuntimeNposCompactSolution16;
    PolkadotRuntimeOriginCaller: PolkadotRuntimeOriginCaller;
    PolkadotRuntimeParachainsConfigurationHostConfiguration: PolkadotRuntimeParachainsConfigurationHostConfiguration;
    PolkadotRuntimeParachainsConfigurationPalletCall: PolkadotRuntimeParachainsConfigurationPalletCall;
    PolkadotRuntimeParachainsConfigurationPalletError: PolkadotRuntimeParachainsConfigurationPalletError;
    PolkadotRuntimeParachainsDisputesDisputeLocation: PolkadotRuntimeParachainsDisputesDisputeLocation;
    PolkadotRuntimeParachainsDisputesDisputeResult: PolkadotRuntimeParachainsDisputesDisputeResult;
    PolkadotRuntimeParachainsDisputesPalletCall: PolkadotRuntimeParachainsDisputesPalletCall;
    PolkadotRuntimeParachainsDisputesPalletError: PolkadotRuntimeParachainsDisputesPalletError;
    PolkadotRuntimeParachainsDisputesPalletEvent: PolkadotRuntimeParachainsDisputesPalletEvent;
    PolkadotRuntimeParachainsDisputesSlashingPalletCall: PolkadotRuntimeParachainsDisputesSlashingPalletCall;
    PolkadotRuntimeParachainsDisputesSlashingPalletError: PolkadotRuntimeParachainsDisputesSlashingPalletError;
    PolkadotRuntimeParachainsHrmpHrmpChannel: PolkadotRuntimeParachainsHrmpHrmpChannel;
    PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest;
    PolkadotRuntimeParachainsHrmpPalletCall: PolkadotRuntimeParachainsHrmpPalletCall;
    PolkadotRuntimeParachainsHrmpPalletError: PolkadotRuntimeParachainsHrmpPalletError;
    PolkadotRuntimeParachainsHrmpPalletEvent: PolkadotRuntimeParachainsHrmpPalletEvent;
    PolkadotRuntimeParachainsInclusionAggregateMessageOrigin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
    PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord;
    PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: PolkadotRuntimeParachainsInclusionCandidatePendingAvailability;
    PolkadotRuntimeParachainsInclusionPalletCall: PolkadotRuntimeParachainsInclusionPalletCall;
    PolkadotRuntimeParachainsInclusionPalletError: PolkadotRuntimeParachainsInclusionPalletError;
    PolkadotRuntimeParachainsInclusionPalletEvent: PolkadotRuntimeParachainsInclusionPalletEvent;
    PolkadotRuntimeParachainsInclusionUmpQueueId: PolkadotRuntimeParachainsInclusionUmpQueueId;
    PolkadotRuntimeParachainsInitializerBufferedSessionChange: PolkadotRuntimeParachainsInitializerBufferedSessionChange;
    PolkadotRuntimeParachainsInitializerPalletCall: PolkadotRuntimeParachainsInitializerPalletCall;
    PolkadotRuntimeParachainsOriginPalletOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    PolkadotRuntimeParachainsParasInherentPalletCall: PolkadotRuntimeParachainsParasInherentPalletCall;
    PolkadotRuntimeParachainsParasInherentPalletError: PolkadotRuntimeParachainsParasInherentPalletError;
    PolkadotRuntimeParachainsParasPalletCall: PolkadotRuntimeParachainsParasPalletCall;
    PolkadotRuntimeParachainsParasPalletError: PolkadotRuntimeParachainsParasPalletError;
    PolkadotRuntimeParachainsParasPalletEvent: PolkadotRuntimeParachainsParasPalletEvent;
    PolkadotRuntimeParachainsParasParaGenesisArgs: PolkadotRuntimeParachainsParasParaGenesisArgs;
    PolkadotRuntimeParachainsParasParaLifecycle: PolkadotRuntimeParachainsParasParaLifecycle;
    PolkadotRuntimeParachainsParasParaPastCodeMeta: PolkadotRuntimeParachainsParasParaPastCodeMeta;
    PolkadotRuntimeParachainsParasPvfCheckActiveVoteState: PolkadotRuntimeParachainsParasPvfCheckActiveVoteState;
    PolkadotRuntimeParachainsParasPvfCheckCause: PolkadotRuntimeParachainsParasPvfCheckCause;
    PolkadotRuntimeParachainsParasReplacementTimes: PolkadotRuntimeParachainsParasReplacementTimes;
    PolkadotRuntimeParachainsSchedulerAssignmentKind: PolkadotRuntimeParachainsSchedulerAssignmentKind;
    PolkadotRuntimeParachainsSchedulerCoreAssignment: PolkadotRuntimeParachainsSchedulerCoreAssignment;
    PolkadotRuntimeParachainsSchedulerParathreadClaimQueue: PolkadotRuntimeParachainsSchedulerParathreadClaimQueue;
    PolkadotRuntimeParachainsSchedulerQueuedParathread: PolkadotRuntimeParachainsSchedulerQueuedParathread;
    PolkadotRuntimeParachainsSharedPalletCall: PolkadotRuntimeParachainsSharedPalletCall;
    PolkadotRuntimeProxyType: PolkadotRuntimeProxyType;
    PolkadotRuntimeRuntime: PolkadotRuntimeRuntime;
    PolkadotRuntimeRuntimeHoldReason: PolkadotRuntimeRuntimeHoldReason;
    PolkadotRuntimeSessionKeys: PolkadotRuntimeSessionKeys;
    SpCoreEcdsaPublic: SpCoreEcdsaPublic;
    SpRuntimeMultiSigner: SpRuntimeMultiSigner;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmV3Instruction: XcmV3Instruction;
    XcmV3Junction: XcmV3Junction;
    XcmV3JunctionBodyId: XcmV3JunctionBodyId;
    XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
    XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
    XcmV3Junctions: XcmV3Junctions;
    XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
    XcmV3MultiAsset: XcmV3MultiAsset;
    XcmV3MultiLocation: XcmV3MultiLocation;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3TraitsOutcome: XcmV3TraitsOutcome;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
