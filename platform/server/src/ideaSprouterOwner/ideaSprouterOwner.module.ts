import { Module } from "@nestjs/common";
import { IdeaSprouterOwnerModuleBase } from "./base/ideaSprouterOwner.module.base";
import { IdeaSprouterOwnerService } from "./ideaSprouterOwner.service";
import { IdeaSprouterOwnerController } from "./ideaSprouterOwner.controller";
import { IdeaSprouterOwnerResolver } from "./ideaSprouterOwner.resolver";

@Module({
  imports: [IdeaSprouterOwnerModuleBase],
  controllers: [IdeaSprouterOwnerController],
  providers: [IdeaSprouterOwnerService, IdeaSprouterOwnerResolver],
  exports: [IdeaSprouterOwnerService],
})
export class IdeaSprouterOwnerModule {}
