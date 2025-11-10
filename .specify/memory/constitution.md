# SailSim Constitution


## Core Principles

### I. Browser-First Delivery
The Sailing simulator application MUST run in all major modern browsers without plugins. All features must be accessible via a web interface. Progressive enhancement is encouraged, but core simulation must not require native code or browser extensions.
**Rationale:** Ensures universal accessibility and ease of use for all users.

### II. Developer-First Hosting
The Sailing simulator application MUST be easily hostable by any developer. All hosting steps (including build, deploy, and serve) MUST be documented and automated where possible. No proprietary or paid services are required for basic hosting.
**Rationale:** Lowers the barrier to entry for contributors and users.

### III. Documentation of Manual Steps
Every manual step required for setup, build, deployment, or operation MUST be documented in the repository. Documentation MUST be kept up to date with code changes. Automated checks SHOULD be used to verify documentation completeness where feasible.
**Rationale:** Reduces onboarding friction and ensures reproducibility.

### IV. Test-Driven Development (TDD)
All new features and bug fixes MUST follow a strict TDD workflow: tests are written before implementation, must fail initially, and only then is code written to pass the tests. The red-green-refactor cycle is enforced. No code is merged without corresponding tests.
**Rationale:** Guarantees reliability, maintainability, and confidence in changes.

### IV. Defaults and best practises
All features should start with default solutions and adhere to best practises. Only is edge cases and after consideration a different solution might be needed.
**Rationale:** Guarantees reliability, maintainability in changes.
<!--  -->
## Technology & Hosting Constraints

- The technology stack MUST support browser-based execution (e.g., JavaScript, TypeScript, WebAssembly).
- All dependencies MUST be open source and compatible with browser environments.
- Hosting instructions MUST include both local and public deployment options (e.g., static file server, GitHub Pages).


## Development Workflow & Quality Gates

- Documentation updates are REQUIRED for any manual process changes.
- Releases MUST be versioned using semantic versioning.


## Governance

- This constitution supersedes all other project practices.
- Amendments require documentation, team approval, and a migration plan if breaking.
- All PRs and reviews MUST verify compliance with these principles.
- Constitution versioning follows semantic versioning: MAJOR for breaking governance changes, MINOR for new principles/sections, PATCH for clarifications.
- Compliance is reviewed at every release and during major planning phases.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Set when first adopted | **Last Amended**: 2025-11-10

<!--
Sync Impact Report
------------------
Version change: [none] → 1.0.0
Modified principles: [template populated]
Added sections: All (first population)
Removed sections: None
Templates requiring updates:
	- plan-template.md ✅ updated/aligned
	- spec-template.md ✅ updated/aligned
	- tasks-template.md ✅ updated/aligned
	- commands/* (N/A - directory missing)
	- README.md / quickstart.md (N/A - not present)
Follow-up TODOs:
	- Set RATIFICATION_DATE on project adoption
-->
