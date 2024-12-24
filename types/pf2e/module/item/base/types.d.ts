import type { CreatureTrait } from "../../actor/creature/types.ts";
import type { AbilityTrait } from "../ability/types.ts";
import type { KingmakerTrait } from "../campaign-feature/types.ts";
import type { NPCAttackTrait } from "../melee/types.ts";
import type { PhysicalItemTrait } from "../physical/types.ts";
type ItemTrait = AbilityTrait | CreatureTrait | PhysicalItemTrait | NPCAttackTrait | KingmakerTrait;
export type { ItemTrait };
