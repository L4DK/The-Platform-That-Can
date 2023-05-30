import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IdeaSprouterOwnerResolverBase } from "./base/ideaSprouterOwner.resolver.base";
import { IdeaSprouterOwner } from "./base/IdeaSprouterOwner";
import { IdeaSprouterOwnerService } from "./ideaSprouterOwner.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IdeaSprouterOwner)
export class IdeaSprouterOwnerResolver extends IdeaSprouterOwnerResolverBase {
  constructor(
    protected readonly service: IdeaSprouterOwnerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
