import { Module } from "@nestjs/common";
import { AiGatekeeperModuleBase } from "./base/aiGatekeeper.module.base";
import { AiGatekeeperService } from "./aiGatekeeper.service";
import { AiGatekeeperController } from "./aiGatekeeper.controller";
import { AiGatekeeperResolver } from "./aiGatekeeper.resolver";

@Module({
  imports: [AiGatekeeperModuleBase],
  controllers: [AiGatekeeperController],
  providers: [AiGatekeeperService, AiGatekeeperResolver],
  exports: [AiGatekeeperService],
})
export class AiGatekeeperModule {}
