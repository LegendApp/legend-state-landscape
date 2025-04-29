// @ts-check
import { LandscapeSchema } from "@localfirstfm/landscape-schema";

export const data = LandscapeSchema.make({
  Version: 1,
  Id: "legend-state",
  Name: "Legend State",
  Description:
    "Client side state library with local first sync engine that works with any backend",
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
    PersistenceMechanism: {
      data: ["IndexedDB", "SQLite", "Local Storage", "Async Storage", "Custom"],
    },
    PersistenceFeatures: { data: "" },
    DataModel: { data: "Any" },
    OfflineReads: { data: "Full Support" },
    OfflineWrites: { data: "Cached offline writes" },
    DataSize: { data: "limited by device capabilities" },
    LocalRefreshLatency: {
      data: "~1ms",
      comment:
        "Legend State is the fastest React state library so local refresh latency is minimal.",
    },
    OptimisticUpdates: { data: "Yes" },
    SchemaManagement: { data: ["Uses the types from your backend"] },
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ["Partial Replication", "Full Replication"],
      comment: "It depends on how you set up your queries",
    },
    ConflictHandling: { data: "Server reconciliation" },
    WhereResolutionOccurs: { data: "Server" },
    WhatGetsSynced: {
      data: {
        ClientToServer: "Only changes",
        ServerToClient: "Only changes",
      },
    },
    Authority: {
      data: "Depends on your backend",
      comment:
        "Providers like Keel, Supabase, or Firebase would be centralized. But you can create a custom sync plugin to any backend if you prefer a decentralized option.",
    },
    Concurrency: {
      data: "Depends on your backend",
      comment:
        "Legend State has no impact on concurrency - see the documentation for your backend of choice.",
    },
    Latency: {
      data: "Depends on your backend",
      comment:
        "Legend State adds no significant latency, so see the documentation for your backend of choice.",
    },
    Throughput: {
      data: "Depends on your backend",
      comment:
        "Legend State has no impact on throughput - see the documentation for your backend of choice.",
    },
  },
  AuthIdentity: {
    AuthenticationMethod: {
      data: ["Depends on your backend"],
      comment:
        "Legend State is typically used for the sync layer, not the auth layer. So you can use any auth provider you want, and then enable sync once authenticated.",
    },
    AuthorizationPermissions: {
      data: "Depends on your backend",
      comment:
        "Legend State is typically used for the sync layer, not the auth layer. So you can use any auth provider you want, and then enable sync once authenticated.",
    },
    Encryption: {
      data: "Depends on your backend",
      comment:
        "If you want to encrypt your data server side, you can easily do that with your backend. If you want to encrypt your data client side, Legend State has transform hooks to encrypt and decrypt your data.",
    },
  },
  DevelopmentWorkflowsDX: {
    CLI: { data: "N/A" },
    DebuggingTools: { data: ["N/A"] },
    TypeSupport: { data: "Yes" },
  },
});
