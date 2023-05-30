import { Module } from "@nestjs/common";
import { AiGatekeeperAgentModuleBase } from "./base/aiGatekeeperAgent.module.base";
import { AiGatekeeperAgentService } from "./aiGatekeeperAgent.service";
import { AiGatekeeperAgentController } from "./aiGatekeeperAgent.controller";
import { AiGatekeeperAgentResolver } from "./aiGatekeeperAgent.resolver";

@Module({
  imports: [AiGatekeeperAgentModuleBase],
  controllers: [AiGatekeeperAgentController],
  providers: [AiGatekeeperAgentService, AiGatekeeperAgentResolver],
  exports: [AiGatekeeperAgentService],
})
export class AiGatekeeperAgentModule {}
