import { Module } from "@nestjs/common";
import { SimpleEntityModuleBase } from "./base/simpleEntity.module.base";
import { SimpleEntityService } from "./simpleEntity.service";
import { SimpleEntityResolver } from "./simpleEntity.resolver";

@Module({
  imports: [SimpleEntityModuleBase],
  providers: [SimpleEntityService, SimpleEntityResolver],
  exports: [SimpleEntityService],
})
export class SimpleEntityModule {}
