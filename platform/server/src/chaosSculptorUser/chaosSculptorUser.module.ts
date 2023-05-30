import { Module } from "@nestjs/common";
import { ChaosSculptorUserModuleBase } from "./base/chaosSculptorUser.module.base";
import { ChaosSculptorUserService } from "./chaosSculptorUser.service";
import { ChaosSculptorUserController } from "./chaosSculptorUser.controller";
import { ChaosSculptorUserResolver } from "./chaosSculptorUser.resolver";

@Module({
  imports: [ChaosSculptorUserModuleBase],
  controllers: [ChaosSculptorUserController],
  providers: [ChaosSculptorUserService, ChaosSculptorUserResolver],
  exports: [ChaosSculptorUserService],
})
export class ChaosSculptorUserModule {}
