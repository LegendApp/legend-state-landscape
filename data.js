// @ts-check
import { LandscapeSchema } from "@localfirstfm/landscape-schema";

export const data = LandscapeSchema.make({
  Version: 1,
  Id: "legend-state",
  Name: "Legend State",
  Description: "Client side state library with local first sync engine",
  Website: "https://legendstate.com",
  Deployment: ["Client-side"],
  License: "MIT",
  GitHub: "https://github.com/legendapp/legend-state",
  InitialReleaseDate: new Date("2023-05-15"),
  MaturityLevel: "Production-Ready",
  AppTarget: {
    Platform: { data: ["Browser", "React Native"] },
    LanguageSDK: { data: ["TypeScript"] },
    FrameworkIntegrations: { data: ["React", "React Native"] },
    ClientBundleSize: { data: "10kb gzipped" },
  },
  Networking: {
    Protocol: { data: ["WebSockets", "HTTP"] },
    Topology: { data: "Client-Server" },
  },
  ServerSideData: {
    PersistenceMechanism: { data: ["N/A"] },
    DataSize: { data: "N/A" },
    DataModelParadigm: { data: "N/A" },
    SchemaManagement: { data: ["N/A"] },
    ExistingDatabaseSupport: { data: "N/A" },
  },
  ClientSideData: {
    QueryAPI: { data: ["Signals-based Reactivity"] },
    PersistenceMechanism: { data: ["IndexedDB", "SQLite", "Custom"] },
    PersistenceFeatures: { data: "" },
    DataModel: { data: "Any" },
    OfflineReads: { data: "Full Support" },
    OfflineWrites: { data: "Cached offline writes" },
    DataSize: { data: "limited by device capabilities" },
    LocalRefreshLatency: { data: "~1ms" },
    OptimisticUpdates: { data: "Yes" },
    SchemaManagement: { data: ["N/A"] },
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: { data: ["Partial Replication"] },
    ConflictHandling: { data: "Server reconciliation" },
    WhereResolutionOccurs: { data: "Server" },
    WhatGetsSynced: {
      data: {
        ClientToServer: "Ops",
        ServerToClient: "Ops",
      },
    },
    Authority: { data: "N/A" },
    Concurrency: { data: "N/A" },
    Latency: { data: "N/A" },
    Throughput: { data: "N/A" },
  },
  AuthIdentity: {
    AuthenticationMethod: { data: ["N/A"] },
    AuthorizationPermissions: { data: "N/A" },
    Encryption: { data: "N/A" },
  },
  DevelopmentWorkflowsDX: {
    CLI: { data: "N/A" },
    DebuggingTools: { data: ["N/A"] },
    TypeSupport: { data: "Yes" },
  },
});
